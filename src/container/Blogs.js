import Blogs from '../page/Blogs'
import { connect } from 'react-redux'

function mapStateToProps(state, ownProps) {
  let page = Number(ownProps.params.page)
  return {
    issues: state.issueList.slice((page - 1) * 4, page * 4),
    totalNum: state.issueList.length
  }
}

export default connect(mapStateToProps)(Blogs)
