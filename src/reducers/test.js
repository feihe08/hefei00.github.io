var {createStore} = require('redux')
var {blogApp} = require('./index')

let store = createStore(blogApp)


store.dispatch({type: 'NAV',nav: 'post'})

console.log(store.getState())