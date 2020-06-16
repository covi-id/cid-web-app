import React from "react";
import walletFormContainer from "stateContainers/walletFormContainer";
import { Route, Redirect } from "react-router-dom";
import { oneOf } from "prop-types";
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
        walletFormContainer.state.wallet_id === "" ? (
          <Redirect to={`/connect-coviid/${purpose}`} />
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
