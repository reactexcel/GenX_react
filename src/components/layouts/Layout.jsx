import React, { useState } from "react";
import Navbars from "../generic/Navbar";
import { HashRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";

export default function Layout(props) {
  return (
    <>
      <Navbars history={props.history}/>

      <Switch>
        <Route path="/app/tools" exact render={() => <div>Hello</div>} />
        <Route path="/app/my-profile" exact component={Profile} />
      </Switch>
    </>
  );
}
