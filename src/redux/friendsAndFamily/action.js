import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import { setLoggedUser, getLoggedUser } from "../../services/generic";
import fireAjax from "../../services/index";
import { toast } from "react-toastify";

export function* friendRequest(action) {
  try {
    const response = yield call(
      fireAjax,
      "GET",
      "listuser",
      {},
      { Authorization: `Token ${getLoggedUser()}` }
    );
    if (response.data) {
      yield put(actions.friendsRequestSuccess(response.data));
    } else {
      yield put(actions.friendsRequestError({}));
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    yield put(actions.friendsRequestError({}));
    toast("Error Occurs !!", { type: "error" });
  }
}
