import { QUERY_BEGIN, QUERY_END, QUERY_FAIL } from '../actions/index'

//数据模型
const initState = {
  loading: true,
  issues: {},
  issueList: []
}


const blogApp = (state = initState, action) => {
  switch (action.type) {
    case QUERY_BEGIN:
      console.time('query')
      return { ...state, loading: true }
    case QUERY_END:
      console.timeEnd('query')
      let issues = {}, issueList = []
      action.data.forEach((issue, index) => {
        issue._index = index
        issues[issue.id] = issue
        issueList.push(issue)
      })
      return { ...state, loading: false, issueList, issues }
    case QUERY_FAIL:
      // location.href = 'https://github.com/hefei00/issues'
      return { ...state, loading: true }
    default:
      return state
  }
}

export default blogApp
