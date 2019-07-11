import isEmpty from "lodash/isEmpty";
import isUndefined from "lodash/isUndefined";
import isNull from "lodash/isNull";

export function setLoggedUser(token) {
  localStorage.setItem("genXToken", token);
  return token;
}

export function getLoggedUser() {
  const token = localStorage.getItem("genXToken");
  if (isUndefined(token) || isEmpty(token) || isNull(token)) {
    return false;
  }
  return token;
}
