import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import { setLoggedUser, getLoggedUser } from "../../services/generic";
import fireAjax from "../../services/index";
import { toast } from "react-toastify";

export function* profileRequest(action) {
  try {
    let { token } = action.payload;
    const response = yield call(
      fireAjax,
      "GET",
      "profile",
      {},
      { Authorization: `Token ${token}` }
    );
    if (response.data) {
      yield put(actions.profileSuccess(response.data));
    } else {
      yield put(actions.profileError({}));
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    yield put(actions.profileError({}));
    toast("Error Occurs !!", { type: "error" });
  }
}
