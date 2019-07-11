import { combineReducers } from "redux";

import login from "./login/reducer";
import signup from "./signup/reducer";
import profile from "./profile/reducer";

export default combineReducers({
  login,
  signup,
  profile
});
