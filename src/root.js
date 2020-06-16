import React, { useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ReactGA from "react-ga";

import Landing from "pages/landing/index.js";
import Step1 from "pages/createWalletPage";
import Step2 from "pages/addStatusPage";
import Step3 from "pages/issueQrCodePage";
import Main from "components/main";
import CoviidUpdated from "pages/coviidUpdatedScreens";

import { createBrowserHistory } from "history";
import PrivateRoute from "components/privateRoute";
import DeleteWallet from "pages/consentScreens/DeleteWallet";
import { getClientKeys } from "utils/cryptography";
import keyPairContainer from "stateContainers/keyPairContainer";
import ConnectCoviID from "pages/connectCoviID";
import SharedWithCT from "pages/coviidUpdatedScreens/sharedWithCT";
import ContactTracerSharing from "pages/consentScreens/ContactTracerSharing";
import WalletDeleted from "pages/consentScreens/WalletDeleted";

const history = createBrowserHistory();

ReactGA.initialize("UA-159574842-2", {
  debug: false,
  titleCase: false,
  gaOptions: {
    cookieDomain: "www.coviid.me",
  },
});
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const Root = () => {
  useEffect(() => {
    async function generateKeyPair() {
      const keyPair = getClientKeys();
      await keyPairContainer.set({
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
      });
    }

    generateKeyPair();
  });

  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/create-wallet/details" component={Step1} />
          <Route
            path="/connect-coviid/:action"
            render={({ match }) => {
              return <ConnectCoviID purpose={match.params.action} />;
            }}
          />
          <PrivateRoute exact path="/create-wallet/status" component={Step2} />
          <PrivateRoute exact path="/create-wallet/created" component={Step3} />
          <PrivateRoute
            exact
            path="/create-wallet/shared/contact-tracer"
            component={SharedWithCT}
          />
          <PrivateRoute
            exact
            path="/create-wallet/status/updated/ct-sharing"
            component={ContactTracerSharing}
          />
          <PrivateRoute
            exact
            path="/create-wallet/status/updated/:consent"
            component={CoviidUpdated}
          />
          <PrivateRoute
            purpose="deleteWallet"
            exact
            path="/delete-wallet"
            component={DeleteWallet}
          />
          <PrivateRoute
            exact
            path="/delete-wallet/complete"
            component={WalletDeleted}
          />
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
        <ToastContainer hideProgressBar />
      </Main>
    </Router>
  );
};

export default Root;
