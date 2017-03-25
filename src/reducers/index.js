import {QUERY_BEGIN, QUERY_END, QUERY_FAIL, PAGE} from '../actions/index'

//数据模型
const initState = {
  nav: 'blogs',//archive, blog
  loading: true,
  issues: {},
  issueList: [],
  perPage: 4,
  page: 1
}


const blogApp = (state = initState, action) => {
  switch (action.type) {
    case 'NAV':
      return {...state, nav: action.nav}
    case QUERY_BEGIN:
      console.log('begin')
      return {...state, loading: true}
    case QUERY_END:
      console.log('end')
      let issues = {}, issueList = []
      action.data.forEach((issue, index) => {
        issue._index = index
        issues[issue.id] = issue
        issueList.push(issue)
      })
      return {...state, loading: false, issueList, issues}
    case QUERY_FAIL:
      console.log('fail')
      break;
    case PAGE:
      return {...state, page: action.page}
    default:
      console.log('default')
      return state
  }
}

export default blogApp
