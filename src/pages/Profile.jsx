import React, { Component, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Button } from "reactstrap";
import GenericInput from "../components/generic/input";
import * as action from "../redux/actions";

export default function Profile(props) {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  return (
    <div className="main-content">
      <section className="profile-module basic-info js-basic-info">
        <div className="outer-container">
          <div className="module-content">
            <div className="sd-card mod-card-3 sd-elevation-1">
              <div className="basic-info-personal">
                <div className="profile-image">
                  <div className="avatar " data-mdv-id="avatar">
                    2S
                  </div>
                </div>
                <div className="basic-info-content">
                  <h1 className="regular js-profile-name">
                    2{" "}
                    {profile.data &&
                      profile.data[0] &&
                      profile.data[0].first_name +
                        " " +
                        profile.data[0].last_name}
                  </h1>
                  <div className="basic-info-details">
                    <div>
                      <div className="label-title">Sex</div>
                      <div className="label-content">Male</div>
                    </div>
                    <div>
                      <div className="label-title">Birth Year</div>
                      <div className="label-content">
                        {moment(
                          profile.data && profile.data[0] && profile.data[0].dob
                        ).format("YYYY")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-module file-upload">
        <div className="outer-container">
          <div className="module-content">
            <div className="sd-card mod-card-3 sd-elevation-1 file-upload-card">
              <h3 className="profile-card-heading">Your raw data DNA file</h3>
              <div className="file-upload-details">
                <div className="notice">
                  Bla bla,{" "}
                  {profile.data &&
                  profile.data[1] &&
                  profile.data[1].doc_details &&
                  profile.data[1].doc_details.length > 0
                    ? "DNA is already uploaded"
                    : "please upload your DNA"}
                </div>
                {profile.data &&
                  profile.data[1] &&
                  profile.data[1].doc_details &&
                  profile.data[1].doc_details.length == 0 && (
                    <Button
                      className="add-dna-button"
                      onClick={() => {
                        document.getElementById("file-upload").click();
                      }}
                    >
                      Upload DNA
                    </Button>
                  )}
                <GenericInput
                  className="hidden"
                  type="file"
                  id="file-upload"
                  onChange={e => {
                    if (e.target.files[0] !== undefined) {
                      const formData = new FormData();
                      formData.append("doc", e.target.files[0]);
                      dispatch(action.dnaFileUpload(formData));
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
