import { github } from '../api'

export const QUERY_BEGIN = 'query_begin'
export const QUERY_END = 'query_end'
export const QUERY_FAIL = 'query_fail'
export const BLOGS = 'blogs'
export const PAGE = 'page'

export function queryIssues() {
  return (dispatch) => {
    dispatch({
      type: QUERY_BEGIN
    })
    return github('issues').then(response => {
      dispatch({
        type: QUERY_END,
        data: response.data
      })
    }).catch(error => {
      dispatch({
        type: QUERY_FAIL
      })
    })
  }
}

export function blogs(page) {
  return {
    type: BLOGS,
    page
  }
}

export function page(page) {
  return {
    type: PAGE,
    page
  }
}

export function nav(nav) {
  return {
    type: 'NAV',
    nav
  }
}
