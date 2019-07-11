import { takeLatest, all } from "redux-saga/effects";
import constants from "./constants";
import { loginRequest } from "./login/action";
import { signupRequest } from "./signup/action";
import { profileRequest } from "./profile/action";

export function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.SIGN_UP_REQUEST, signupRequest);
  yield takeLatest(constants.PROFILE_REQUEST, profileRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
