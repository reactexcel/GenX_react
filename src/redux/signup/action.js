import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import { setLoggedUser, getLoggedUser } from "../../services/generic";
import fireAjax from "../../services/index";
import { toast } from "react-toastify";

export function* signupRequest(action) {
  try {
    const response = yield call(
      fireAjax,
      "POST",
      "register",
      action.payload,
      {}
    );
    if (!response.data.error) {
      let { token } = response.data;
      yield put(actions.profileRequest({ token }));
      yield put(
        actions.signupSuccess({
          token: setLoggedUser(token),
          message: "Sign up successfully."
        })
      );
      toast("Sign up successfully.", { type: "success" });
    } else {
      yield put(
        actions.signupError({
          message: response.data.errors.email[0] || "Error Occurs !!"
        })
      );
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    yield put(
      actions.signupError({
        message:
          e.response &&
          e.response.data.errors.email &&
          e.response.data.errors.email[0]
            ? e.response.data.errors.email[0]
            : "Error Occurs !!"
      })
    );
    toast(
      e.response &&
        e.response.data.errors.email &&
        e.response.data.errors.email[0]
        ? e.response.data.errors.email[0]
        : "Error Occurs !!",
      { type: "error" }
    );
  }
}
