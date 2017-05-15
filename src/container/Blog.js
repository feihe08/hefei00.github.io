import Blog from '../page/Blog'
import { connect } from 'react-redux'

function mapStateToProps({issues, issueList}, ownProps) {
  return {
    issue: issues[ownProps.match.params.id],
    issueList
  }
}

export default connect(mapStateToProps)(Blog)
