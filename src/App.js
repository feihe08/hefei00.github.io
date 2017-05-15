import React, { Component } from 'react'

import Archive from './container/Archive'
import Blogs from './container/Blogs'
import Blog from './container/Blog'
// import NotFound from './page/NotFound'
import Loading from './components/Loading'

import { connect } from 'react-redux'
import { queryIssues } from './actions/index'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

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
        <Router>
          <Switch>
            <Route path="/">
              <div>
                <Redirect from="/" to="/page/1" />
                <Route path="/page/:page" component={Blogs} />
                <Route path="/archive" component={Archive} />
                <Route path="/post/:id" component={Blog} />
              </div>
            </Route>
            {/*<Route component={NotFound} />*/}
          </Switch>
        </Router>
      )
    }
  }
}

let mapStateToProps = ({ loading }) => ({ loading })
export default connect(mapStateToProps)(App)
