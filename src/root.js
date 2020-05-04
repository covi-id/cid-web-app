import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Landing from 'pages/landing/index.js'
import Step1 from 'pages/createWalletPage'
import Step2 from 'pages/addStatusPage'
import Step3 from 'pages/issueQrCodePage'
import Main from 'components/main'
import ConnectCoviid from 'pages/cardsPage'
import CoviidUpdated from 'pages/coviidUpdatedPage'
import ReactGA from 'react-ga'

import { createBrowserHistory } from 'history'
import PrivateRoute from 'components/privateRoute'

const history = createBrowserHistory()

ReactGA.initialize('UA-159574842-2', {
  debug: false,
  titleCase: false,
  gaOptions: {
    cookieDomain: 'www.coviid.me',
  },
})
ReactGA.pageview(window.location.pathname + window.location.search)

history.listen((location) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

const Root = () => (
  <Router history={history}>
    <Main>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/connect-coviid'>
          <ConnectCoviid />
        </Route>
        <Route path='/create-wallet/details'>
          <Step1 />
        </Route>

        <Route exact path='/create-wallet/status' component={Step2} />

        <PrivateRoute exact path='/create-wallet/created' component={Step3} />

        <PrivateRoute
          exact
          path='/create-wallet/status/updated'
          component={CoviidUpdated}
        />

        <Route path='*'>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
      <ToastContainer hideProgressBar />
    </Main>
  </Router>
)

export default Root
