import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {initFetch} from './store'
import {log} from './log'


// log('start')
// initFetch().then(() => {
//   log('end')
//   ReactDOM.render(<App />, document.querySelector('#root'))
// })



import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import blogApp from './reducers/index'
import { nav, queryIssues } from './actions/index'


let store = createStore(
  blogApp,
  applyMiddleware(thunk)
)


store.dispatch(nav('blog'))

console.log(store.getState())

store.dispatch(queryIssues())


