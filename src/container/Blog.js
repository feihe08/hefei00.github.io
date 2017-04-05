import Blog from '../page/Blog'
import { connect } from 'react-redux'

function mapStateToProps(state, ownProps) {
  return {
    issue: state.issues[ownProps.params.id],
    issueList: state.issueList
  }
}

export default connect(mapStateToProps)(Blog)
