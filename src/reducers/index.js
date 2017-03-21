//数据模型
const initState = {
  nav: 'blogs',//archive, blog
  issues: {},
  issueList: [],
  perPage: 4,
  page: 1
}


const blogApp = (state = initState, action) => {
  switch (action.type) {
    case 'NAV':
      return Object.assign(state, {nav: action.nav})
      break
    case 'QUERY_BEGIN':
      console.log('begin')
      break
    case 'QUERY_END':
      console.log('end')
      break
    default:
      console.log('init')
      return state
      break
  }
}

export default blogApp