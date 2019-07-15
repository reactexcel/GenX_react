import React from "react";
import moment from "moment";

export default function ProfileSection({ data, isButton, onClick }) {
  return (
    <section className="profile-module basic-info js-basic-info">
      <div className="outer-container">
        <div className="module-content">
          <div className="sd-card mod-card-3 sd-elevation-1">
            <div className="basic-info-personal">
              <div className="profile-image">
                <div className="avatar " data-mdv-id="avatar">
                  {data.first_name.charAt(0)}
                  {data.last_name.charAt(0)}
                </div>
              </div>
              <div className="basic-info-content">
                <h1 className="regular js-profile-name capitalize">
                  {data.first_name + " " + data.last_name}
                </h1>
                <div className="basic-info-details">
                  <div>
                    <div className="label-title">Sex</div>
                    <div className="label-content capitalize">
                      {data.sex ? data.sex : "N/A"}
                    </div>
                  </div>
                  <div>
                    <div className="label-title">Birth Year</div>
                    <div className="label-content">
                      {moment(data.dob).format("YYYY")}
                    </div>
                  </div>
                </div>
              </div>
              {isButton && (
                <div className="basic-info-actions">
                  {/* <div>
                    <button className="profile-button add-connection-button">
                      <span>Add connection</span>
                    </button>
                  </div> */}
                  <button
                    className={`profile-button ${data.messages.length?"read":"send"}-message-button`}
                    onClick={onClick}
                  >
                    <span>
                      {data.messages.length
                        ? "Read messages"
                        : "Send a message"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
