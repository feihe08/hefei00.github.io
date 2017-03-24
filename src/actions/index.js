import {github} from '../api'

export const QUERY_BEGIN = 'query_begin'
export cosnt QUERY_END = 'query_end'

export function queryIssues() {
  return (dispatch) => {
    dispatch({
      type: QUERY_BEGIN
    })
    return github('issues').then(response => {
      dispatch({
        type: QUERY_END
      })
    })
  }
}

export function nav(nav) {
  return {
    type: 'NAV',
    nav
  }
}
