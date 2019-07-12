import { combineReducers } from "redux";

import login from "./login/reducer";
import signup from "./signup/reducer";
import profile from "./profile/reducer";
import friendAndFamily from "./friendsAndFamily/reducer";

export default combineReducers({
  login,
  signup,
  profile,
  friendAndFamily
});
