import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {initFetch} from './store'
import {log} from './log'


log('start')
initFetch().then(() => {
  log('end')
  ReactDOM.render(<App />, document.querySelector('#root'))
})

