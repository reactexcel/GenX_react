import React, { Component, useEffect, useState } from "react";
import ProfileSection from "../components/generic/ProfileSection";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/actions";
import { Launcher } from "react-chat-window";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";

export default function FriendProfile(props) {
  const profile = useSelector(state => state.friendProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.friendProfileRequest({ id: props.match.params.id }));
  }, []);
  useEffect(() => {
    dispatch(action.getChatMessage({ id: props.match.params.id }));
  }, []);
  const msgList =
    !isEmpty(profile.chatMsg) &&
    sortBy(profile.chatMsg, item => {
      return item.mid;
    });
  return (
    <div className="main-content">
      {profile.data && !isEmpty(profile.data) && (
        <ProfileSection data={profile.data} />
      )}
      <Launcher
        agentProfile={{
          imageUrl: "",
          teamName: `${profile.data.first_name + " " + profile.data.last_name}`
        }}
        // handleClick={()=>{console.log("clicked");
        // }}
        messageList={msgList}
        onMessageWasSent={msg => {
          dispatch(
            action.postChatMessage({
              id: profile.data.id,
              message: msg.data.text
            })
          );
        }}
        showEmoji={false}
        showFile={false}
      />
    </div>
  );
}
