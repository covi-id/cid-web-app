import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Landing from "pages/landing/index.js";
import ProofRequest from "pages/createWalletPage";
import Main from "components/main";

const Root = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/create-wallet">
          <ProofRequest />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default Root;
