import React, { Component, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Button } from "reactstrap";
import GenericInput from "../components/generic/input";
import * as action from "../redux/actions";
import ProfileSection from "../components/generic/ProfileSection";

export default function Profile(props) {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  return (
    <div className="main-content">
      {profile.data && profile.data[0] && (
        <ProfileSection data={profile.data[0]} />
      )}
      {profile.data && profile.data[1] && (
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
                  profile.data[1].doc_details.length == 0 ? (
                    <Button
                      className="add-dna-button"
                      onClick={() => {
                        document.getElementById("file-upload").click();
                      }}
                    >
                      Upload DNA
                    </Button>
                  ) : (
                    <Button
                      className="remove-dna-button"
                      onClick={() => {
                        dispatch(
                          action.dnaFileDelete({
                            id: profile.data[1].doc_details[0].id
                          })
                        );
                      }}
                    >
                      Remove DNA
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
      )}
    </div>
  );
}
