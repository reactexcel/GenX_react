import React, { Component } from "react";
import GenericInput from "../components/generic/input";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/actions";
import Header from "../components/generic/Header";
import cloneDeep from 'lodash/cloneDeep';

export default function Signup() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="wrapper bg-light">
        <div class="auth-narrow">
          <div class="sd-card sd-elevation-1 auth-card bg-white">
            <h1 className="text-secondary">Sign up</h1>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                cnfpassword: "",
                dob: ""
              }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "*Invalid email address";
                }
                if (!values.password) {
                  errors.password = "*Required";
                }
                if (!values.cnfpassword) {
                  errors.cnfpassword = "*Required";
                }
                if (values.password !== values.cnfpassword) {
                  errors.cnfpassword = "*Passwords didn't match";
                }
                if (!values.first_name) {
                  errors.first_name = "*Required";
                }
                if (!values.last_name) {
                  errors.last_name = "*Required";
                }
                if (!values.dob) {
                  errors.dob = "*Required";
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                let data = cloneDeep(values);
                delete data.cnfpassword;
                dispatch(action.signupRequest(data));
              }}
              render={({
                errors,
                status,
                touched,
                isSubmitting,
                handleChange,
                handleSubmit,
                setFieldValue,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <div class="mb-2">
                    <GenericInput
                      type="text"
                      name="first_name"
                      className="form-control"
                      onChange={handleChange}
                      place_holder="First name"
                    />
                    <small className="text-danger">
                      {errors.first_name &&
                        touched.first_name &&
                        errors.first_name}
                    </small>
                  </div>
                  <div class="mb-2">
                    <GenericInput
                      type="text"
                      name="last_name"
                      className="form-control"
                      onChange={handleChange}
                      place_holder="Last name"
                    />
                    <small className="text-danger">
                      {errors.last_name &&
                        touched.last_name &&
                        errors.first_name}
                    </small>
                  </div>
                  <div class="mb-2">
                    <GenericInput
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                      place_holder="Email"
                    />
                    <small className="text-danger">
                      {errors.email && touched.email && errors.email}
                    </small>
                  </div>
                  <div class="mb-2">
                    <GenericInput
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleChange}
                      place_holder="Create a password"
                    />
                    <small className="text-danger">
                      {errors.password && touched.password && errors.password}
                    </small>
                  </div>
                  <div class="mb-2">
                    <GenericInput
                      type="password"
                      name="cnfpassword"
                      className="form-control"
                      onChange={handleChange}
                      place_holder="Confirm password"
                    />
                    <small className="text-danger">
                      {errors.cnfpassword &&
                        touched.cnfpassword &&
                        errors.cnfpassword}
                    </small>
                  </div>
                  <div class="mb-2">
                    <DatePicker
                      name="dob"
                      value={
                        values.dob
                          ? moment(values.dob).format("DD-MM-YYYY")
                          : null
                      }
                      className="form-control"
                      onChange={date => {
                        setFieldValue(
                          "dob",
                          moment(date).format("YYYY-MM-DDTHH:MM")
                        );
                      }}
                      placeholderText="Date of birth"
                    />
                    <small className="text-danger">
                      {errors.dob && touched.dob && errors.dob}
                    </small>
                  </div>
                  <Button className="sd-button" size="lg" type="submit">
                    Sign up
                  </Button>
                </form>
              )}
            />
          </div>
          <section>
            <p class="text-secondary sublink">
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
