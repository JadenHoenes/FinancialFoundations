import React, {Component} from "react";
import {Route, Redirect, withRouter} from "react-router-dom";

const LogoutButton = withRouter(
  ({ history, auth }) => { return (
    <button
      className="ui inverted button"
      style={{marginLeft: '0.5em'}}
      onClick={() => {
        auth.logout();
        history.push("/");
      }}
    >
      Log out
    </button>
  )}
);

export default LogoutButton
