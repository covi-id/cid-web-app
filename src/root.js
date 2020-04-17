import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Landing from "pages/landing/index.js";
import Step1 from "pages/createWalletPage";
import Main from "components/main";
import Step2 from "pages/addStatusPage";

const Root = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/create-wallet/details">
          <Step1 />
        </Route>
        <Route exact path="/create-wallet/status">
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
