import Archive from '../page/Archive'
import {connect} from 'react-redux'


function archives (issues) {
  let year = undefined
  let issueYear = undefined
  let archive = []

  issues.forEach(issue => {
    issueYear = issue.created_at.slice(0,4)
    if (year !== issueYear) {
      year = issueYear
      archive.push(year)
    }
    archive.push(issue)
  })
  return archive
}

function mapStateToProps(state, ownProps) {
  return {
    issueList: archives(state.issueList)
  }
}

export default connect(mapStateToProps)(Archive)
