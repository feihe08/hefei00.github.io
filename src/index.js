import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {initFetch} from './store'


initFetch().then(() => {
  ReactDOM.render(<App />, document.querySelector('#root'))
})


function log(info) {
  let date = new Date()
  console.log(date.toGMTString() + info)
}
