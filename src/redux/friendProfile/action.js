import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import { setLoggedUser, getLoggedUser } from "../../services/generic";
import fireAjax from "../../services/index";
import { toast } from "react-toastify";

export function* friendProfileRequest(action) {
  try {
    const response = yield call(
      fireAjax,
      "GET",
      `partuser/${action.payload.id}`,
      {},
      { Authorization: `Token ${getLoggedUser()}` }
    );
    if (response.data) {
      yield put(actions.friendProfileRequestSuccess(response.data));
    } else {
      yield put(actions.friendProfileRequestError({}));
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    yield put(actions.friendProfileRequestError({}));
    toast("Error Occurs !!", { type: "error" });
  }
}

export function* chatMsgList(action) {
  try {
    const response = yield call(
      fireAjax,
      "GET",
      `chat/${action.payload.id}`,
      {},
      { Authorization: `Token ${getLoggedUser()}` }
    );
    if (response.data) {
      yield put(actions.chatMessageListSuccess(response.data));
    } else {
      yield put(actions.chatMessageListError({}));
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    yield put(actions.chatMessageListError({}));
    toast("Error Occurs !!", { type: "error" });
  }
}

export function* postChatMsg(action) {
  try {
    const response = yield call(
      fireAjax,
      "POST",
      `chat/${action.payload.id}`,
      { message: action.payload.message },
      { Authorization: `Token ${getLoggedUser()}` }
    );
    if (response.data) {
      yield put(actions.getChatMessage({ id: response.data.receiver }));
    } else {
      // yield put(actions.friendProfileRequestError({}));
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    //   yield put(actions.friendProfileRequestError({}));
    toast("Error Occurs !!", { type: "error" });
  }
}
