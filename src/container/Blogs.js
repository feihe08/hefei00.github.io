import Blogs from '../page/Blogs'
import { connect } from 'react-redux'

function mapStateToProps({issueList}, ownProps) {
  let page = Number(ownProps.params.page)
  return {
    issues: issueList.slice((page - 1) * 4, page * 4),
    totalNum: issueList.length
  }
}

export default connect(mapStateToProps)(Blogs)
