import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import { setLoggedUser, getLoggedUser } from "../../services/generic";
import fireAjax from "../../services/index";
import { toast } from "react-toastify";

export function* loginRequest(action) {
  try {
    const response = yield call(fireAjax, "POST", "login", action.payload, {});
    if (!response.data.error) {
      let { token } = response.data;
      yield put (actions.profileRequest({token}))
      yield put(
        actions.loginSuccess({
          token: setLoggedUser(token),
          message: "Log in successfully."
        })
      );
      toast("Log in successfully.", { type: "success" });
    } else {
      yield put(
        actions.loginError({
          message: response.data.msg || "Error Occurs !!"
        })
      );
      toast("Error Occurs !!", { type: "error" });
    }
  } catch (e) {
    yield put(
      actions.loginError({
        message: e.response && e.response.data.msg ? e.response.data.msg : "Error Occurs !!"
      })
    );
    toast(e.response && e.response.data.msg ? e.response.data.msg : "Error Occurs !!", {
      type: "error"
    });
  }
}

