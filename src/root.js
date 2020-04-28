import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "pages/landing/index.js";
import Step1 from "pages/createWalletPage";
import Step2 from "pages/addStatusPage";
import Step3 from "pages/issueQrCodePage";
import Main from "components/main";
import ConnectCoviid from "pages/cardsPage";
import VerificationConsent from "pages/verificationConsentPage";
import CoviidUpdated from "pages/coviidUpdatedPage";
import ReactGA from "react-ga";

import { createBrowserHistory } from "history";
import PrivateRoute from "components/privateRoute";

const history = createBrowserHistory();

ReactGA.initialize("UA-159574842-2", {
  debug: false,
  titleCase: false,
  gaOptions: {
    cookieDomain: "www.coviid.me"
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const Root = () => (
  <Router history={history}>
    <Main>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/connect-coviid">
          <ConnectCoviid />
        </Route>
        <Route path="/create-wallet/details">
          <Step1 />
        </Route>

        <PrivateRoute path="/create-wallet/status" component={Step2} />

        <Route path="/create-wallet/created">
          <Step3 />
        </Route>
        <Route path="/consent/verification">
          <VerificationConsent />
        </Route>
        <PrivateRoute
          path="/create-wallet/status/updated"
          component={CoviidUpdated}
        />

        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default Root;
