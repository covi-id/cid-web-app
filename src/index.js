import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './root.js'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-WBLDSB8',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <Root />,

  document.getElementById('root')
)
