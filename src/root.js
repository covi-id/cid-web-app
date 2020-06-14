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
import CoviidUpdated from "pages/coviidUpdatedPage";

import { createBrowserHistory } from "history";
import PrivateRoute from "components/privateRoute";
import DeleteWallet from "pages/consentScreens/DeleteWallet";
import { getClientKeys, randomNumber } from "utils/cryptography";
import keyPairContainer from "stateContainers/keyPairContainer";

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
      console.log(await randomNumber(1, Number.MAX_SAFE_INTEGER));
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
          <PrivateRoute exact path="/create-wallet/status" component={Step2} />
          <PrivateRoute exact path="/create-wallet/created" component={Step3} />
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
