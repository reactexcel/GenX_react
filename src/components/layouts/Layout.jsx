import React, { useState } from "react";
import Navbars from "../generic/Navbar";
import { HashRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Profile from "../../pages/Profile";
import FamilyNFriends from "../../pages/FamilyNFriends";
import FriendProfile from "../../pages/FriendProfile";

export default function Layout(props) {
  return (
    <>
      <Navbars history={props.history}/>

      <Switch>
        <Route path="/app/relatives" exact component={FamilyNFriends} />
        <Route path="/app/my-profile" exact component={Profile} />
        <Route path="/app/friend/:id" exact component={FriendProfile}/>
      </Switch>
    </>
  );
}
