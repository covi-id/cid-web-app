import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Landing from 'pages/landing/index.js'
import Step1 from 'pages/createWalletPage'
import Step2 from 'pages/addStatusPage'
import Step3 from 'pages/issueQrCodePage'
import Main from 'components/main'
import ConnectCoviid from 'pages/cardsPage'
import VerificationConsent from 'pages/verificationConsentPage'
import CoviidUpdated from 'pages/coviidUpdatedPage'

const Root = () => (
  <Router>
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
        <Route path="/create-wallet/status">
          <Step2 />
        </Route>
        <Route path='/create-wallet/issue/dark'>
          <Step3 />
        </Route>
        <Route path='/consent/verification'>
          <VerificationConsent />
        </Route>
        <Route path='/consent/coviid-updated/dark'>
          <CoviidUpdated />
        </Route>

        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default Root;
