import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Demo from './demo'
import DemoAjax from './demo_ajax'
import store from './store'

import './assets/index.css'

let demoComponent
if (window.location.href.includes('ajax')) {
  demoComponent = <DemoAjax />
} else {
  demoComponent = <Demo />
}

ReactDOM.render((
  <Provider store={store}>
    {demoComponent}
  </Provider>
), document.getElementById('app'))
