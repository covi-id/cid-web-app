import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './root.js'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
