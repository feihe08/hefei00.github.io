import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import blogApp from './reducers/index'

import App from './App'
import './index.css'
import {initFetch} from './store'
import {log} from './log'

let store = createStore(
  blogApp,
  applyMiddleware(thunk)
)


log('start')
initFetch().then(() => {
  log('end')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root'))
})
