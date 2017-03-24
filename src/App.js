import React, {Component} from 'react'
import Archive from './view/Archive'
import Tags from './view/Tags'
import About from './view/About'
import Blogs from './view/Blogs'
import Blog from './view/Blog'
import NotFound from './view/NotFound'
import Loading from './components/Loading'

import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <Loading />
      // <Router history={hashHistory}>
      //   <Route path='/'>
      //     <IndexRedirect to={`/page/1`} component={Blogs} />
      //     <Route path='/page/:page' component={Blogs} />
      //     <Route path='/about' component={About} />
      //     <Route path='/archive' component={Archive} />
      //     <Route path='/tags' component={Tags} />
      //     <Route path='/post/:id' component={Blog} />
      //     <Route path='*' component={NotFound} />
      //   </Route>
      // </Router>
    )
  }
}

export default App
