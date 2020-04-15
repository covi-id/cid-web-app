import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Landing from './pages/landing/index.js'
import ProofRequest from './pages/proofRequest'
import IssueCredential from './pages/issueCredential/index.js'
import IssueQRCode from './pages/issueQRCode/index.js'

export default function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/landing'></Redirect>
        </Route>
        <Route exact path='/landing'>
          <Landing />
        </Route>
        <Route exact path='/proof-request'>
          <ProofRequest />
        </Route>
        <Route exact path='/issue-credential'>
          <IssueCredential />
        </Route>
        <Route exact path='/issue-qr-code'>
          <IssueQRCode />
        </Route>
      </Switch>
    </Router>
  )
}
