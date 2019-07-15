import React, { Component, useEffect } from "react";
import GenericInput from "../components/generic/input";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Header from "../components/generic/Header";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/actions";
import { Spinner } from "reactstrap";

export default function Login(props) {
  const dispatch = useDispatch();
  const loginDetails = useSelector(state => state.login);
  useEffect(() => {
    if (loginDetails.isSuccess && !loginDetails.isLogedOut) {
      props.history.push("/app/relatives");
    }
  }, [loginDetails.isSuccess]);

  return (
    <>
      <Header />
      <div className="bg-light wrapper">
        <div class="auth-narrow sign-in">
          <div class="sd-card sd-elevation-1 auth-card bg-white">
            <h1 className="text-secondary">Sign in</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "*Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "*Invalid email address";
                }
                if (!values.password) {
                  errors.password = "*Required";
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                dispatch(action.loginRequest(values));
              }}
              render={({
                errors,
                status,
                touched,
                isSubmitting,
                handleChange,
                handleSubmit
              }) => (
                <form onSubmit={handleSubmit}>
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
                      onChange={handleChange}
                      className="form-control"
                      place_holder="Password"
                    />
                    <small className="text-danger">
                      {errors.password && touched.password && errors.password}
                    </small>
                  </div>
                  <p class="auth-shorttext mod-forgot">
                    <Link to="/">Forgot your password?</Link>
                  </p>
                  <Button
                    className="sd-button"
                    size="lg"
                    type="submit"
                    disabled={loginDetails.isLoading ? true : false}
                  >
                    {loginDetails.isLoading ? (
                      <Spinner size="md" color="light" />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </form>
              )}
            />
          </div>
          <section>
            <p class="text-secondary sublink">
              New to the site? <Link to="/signup">Sign up</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
