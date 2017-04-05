import React, { Component } from 'react'

import Archive from './container/Archive'
import Blogs from './container/Blogs'
import Blog from './container/Blog'
import NotFound from './page/NotFound'
import Loading from './components/Loading'

import { connect } from 'react-redux'
import { queryIssues } from './actions/index'

import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props)
    props.dispatch(queryIssues())
  }
  render() {
    let loading = this.props.loading
    if (loading) {
      return <Loading />
    } else {
      return (
        <Router history={hashHistory}>
          <Route path='/'>
            <IndexRedirect to={`/page/1`} component={Blogs} />
            <Route path='/page/:page' component={Blogs} />
            <Route path='/archive' component={Archive} />
            <Route path='/post/:id' component={Blog} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      )
    }
  }
}


function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}


export default connect(mapStateToProps)(App)
