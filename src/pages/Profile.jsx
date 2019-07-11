import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

export default function Profile(props) {
    const profile = useSelector(state=>state.profile);
    
  return (
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
                <h1 className="regular js-profile-name">2 {profile.data && profile.data.first_name+" "+profile.data.last_name}</h1>
                <div className="basic-info-details">
                  <div>
                    <div className="label-title">Sex</div>
                    <div className="label-content">Male</div>
                  </div>
                  <div>
                    <div className="label-title">Birth Year</div>
                    <div className="label-content">{moment(profile.data && profile.data.dob).format("YYYY")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
