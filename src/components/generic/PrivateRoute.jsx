import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getLoggedUser } from "../../services/generic";
import * as action from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  if (getLoggedUser()) {
    dispatch(action.profileRequest({ token: getLoggedUser() }));
  }

  return (
    <Route
      {...rest}
      render={props =>
        getLoggedUser() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}
