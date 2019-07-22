import React, { Component, useEffect, useState, useRef } from "react";
import ProfileSection from "../components/generic/ProfileSection";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/actions";
import { Launcher } from "react-chat-window";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";

export default function FriendProfile(props) {
  const profile = useSelector(state => state.friendProfile.data);
  const chatMsgList = useSelector(state => state.friendProfile.chatMsg);
  const dispatch = useDispatch();
  const [chatWindow, toggleChat] = useState(false);
  const [isChatShow, chatShow] = useState(false);
  const [msgLists, setMsg] = useState([]);
  let chatReq = useRef();
  useEffect(() => {
    dispatch(action.friendProfileRequest({ id: props.match.params.id }));
  }, []);
  useEffect(() => {
    setMsg(
      sortBy(chatMsgList, item => {
        return item.mid;
      })
    );
  }, [chatMsgList.length]);
  useEffect(() => {
    return () => {
      clearInterval(chatReq.current);
      dispatch(action.resetProfile({}));
    };
  }, []);
  return (
    <div className="main-content">
      {profile && !isEmpty(profile) && (
        <ProfileSection
          data={profile}
          isButton={true}
          onClick={() => {
            toggleChat(!chatWindow);
            dispatch(action.getChatMessage({ id: props.match.params.id }));
            chatReq.current = setInterval(() => {
              dispatch(action.getChatMessage({ id: props.match.params.id }));
            }, 5000);
            chatShow(true);
          }}
        />
      )}
      {profile && !isEmpty(profile) && (
        <section class="profile-module basic-info genetic-info">
          <div class="outer-container">
            <div class="module-content">
              <div class="sd-card mod-card-3 sd-elevation-1">
                <h3 class="profile-card-heading">Your genetic relationship</h3>
                <div class="genetic-relationship-content">
                  <div class="genetic-relationship-details">
                    <div class="genetic-relationship-section ">
                      <div class="label-title">Predicted relationship</div>
                      <div class="label-content js-label-content">
                        {profile.degree}'th Cousin
                      </div>
                    </div>
                    <div class="genetic-relationship-section js-shared-dna-percentage shared-dna-percentage">
                      <div class="label-title">Shared DNA</div>
                      <div class="label-content js-label-content">
                        {profile.shared_dna}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isChatShow && (
        <Launcher
          agentProfile={{
            imageUrl: "",
            teamName: `${profile.first_name + " " + profile.last_name}`
          }}
          handleClick={e => toggleChat(!chatWindow)}
          messageList={msgLists}
          onMessageWasSent={msg => {
            dispatch(
              action.postChatMessage({
                id: profile.id,
                message: msg.data.text
              })
            );
          }}
          showEmoji={false}
          isOpen={chatWindow}
        />
      )}
    </div>
  );
}
