import React from "react";
import walletFormContainer from "stateContainers/walletFormContainer";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        walletFormContainer.state.walletId === "" ? (
          <Redirect to="/connect-coviid" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
