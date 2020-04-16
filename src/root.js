import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "./pages/landing/index.js";
import ProofRequest from "./pages/proofRequest";
import IssueCredential from "./pages/issueCredential/index.js";
import IssueQRCode from "./pages/issueQRCode/index.js";
import Main from "components/main/index.js";

const Root = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/proof-request">
          <ProofRequest />
        </Route>
        <Route exact path="/issue-credential">
          <IssueCredential />
        </Route>
        <Route exact path="/issue-qr-code">
          <IssueQRCode />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default Root;
