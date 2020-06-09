import React from "react";
import walletFormContainer from "stateContainers/walletFormContainer";
import { Route } from "react-router-dom";
import { oneOf } from "prop-types";
import ConnectCoviID from "pages/connectCoviID";

/**
 *
 * @param {{
 * purpose: "addTest" | "deleteWallet"
 * }} param0
 */

const PrivateRoute = ({ component: Component, purpose, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        walletFormContainer.state.walletId === "" ? (
          <ConnectCoviID purpose={purpose} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  purpose: "addTest",
};

PrivateRoute.propTypes = {
  purpose: oneOf(["addTest", "deleteWallet"]),
};

export default PrivateRoute;
