import Blogs from '../page/Blogs'
import {connect} from 'react-redux'
import {page} from '../actions/index'

function mapStateToProps(state, ownProps) {
  let page = Number(ownProps.params.page)
  return {
    issues: state.issueList.slice((page -1) * 4, page * 4 ),
    totalNum: state.issueList.length
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    pageNav: (p) => {
      dispatch(page(p))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
