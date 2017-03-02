import React, {Component} from 'react'
import Archive from './view/Archive'
import About from './view/About'
import Blogs from './view/Blogs'
import Blog from './view/Blog'
import NotFound from './view/NotFound'
import { Router, Route, hashHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Blogs} />
        <Route path='/about' component={About} />
        <Route path='/archive' component={Archive} />
        <Route path='/post/:id' component={Blog} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}
export default App
