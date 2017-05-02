import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import blogApp from './reducers/index'

let store = createStore(
  blogApp,
  applyMiddleware(thunk)
)


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={store} />, div)
})
