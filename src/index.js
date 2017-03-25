import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import blogApp from './reducers/index'

import './index.css'

import App from './App'


let store = createStore(
  blogApp,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'))
