import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Landing from './pages/landing'
import ProofRequest from './pages/proofRequest'
import IssueCredential from './pages/issueCredential'
import IssueQRCode from './pages/issueQRCode'

export default function Root() {
  console.log(process.env.BASE_URL)
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
