import { takeLatest, all } from "redux-saga/effects";
import constants from "./constants";
import { loginRequest } from "./login/action";
import { signupRequest } from "./signup/action";
import { profileRequest, dnaUpload, dnaDelete } from "./profile/action";
import { friendRequest } from "./friendsAndFamily/action";
import { friendProfileRequest, chatMsgList, postChatMsg } from "./friendProfile/action";
export function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.SIGN_UP_REQUEST, signupRequest);
  yield takeLatest(constants.PROFILE_REQUEST, profileRequest);
  yield takeLatest(constants.FRIENDS_FAMILY_REQUEST, friendRequest);
  yield takeLatest(constants.DNA_FILE_UPLOAD, dnaUpload);
  yield takeLatest(constants.DNA_FILE_DELETE, dnaDelete);
  yield takeLatest(constants.GET_FRIEND_DETAILS, friendProfileRequest);
  yield takeLatest(constants.GET_CHAT_MESSAGE_LIST, chatMsgList);
  yield takeLatest(constants.POST_CHAT_MESSAGE, postChatMsg);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
