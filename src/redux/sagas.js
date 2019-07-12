import { takeLatest, all } from "redux-saga/effects";
import constants from "./constants";
import { loginRequest } from "./login/action";
import { signupRequest } from "./signup/action";
import { profileRequest, dnaUpload } from "./profile/action";
import { friendRequest } from "./friendsAndFamily/action";

export function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.SIGN_UP_REQUEST, signupRequest);
  yield takeLatest(constants.PROFILE_REQUEST, profileRequest);
  yield takeLatest(constants.FRIENDS_FAMILY_REQUEST, friendRequest);
  yield takeLatest(constants.DNA_FILE_UPLOAD, dnaUpload);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
