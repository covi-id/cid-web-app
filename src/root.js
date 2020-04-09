import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Landing from './pages/landing/index.js'
import ProofRequest from './pages/proofRequest/'

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
      </Switch>
    </Router>
  )
}
