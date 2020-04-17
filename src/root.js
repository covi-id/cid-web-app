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
import Main from "components/main";

const Root = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/create-wallet/status">
          <Step2 />
        </Route>
        <Route path="/create-wallet/details">
          <Step1 />
        </Route>
        <Route path="/create-wallet/status">
          <Step2 />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default Root;
