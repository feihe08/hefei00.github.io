import {fetchIssues} from './api'

const store = {}
let issues = []

export function initFetch () {
  let fetchAll = fetchIssues().then(json => {
    json.forEach(issue => {
      store[issue.id] = issue
    })
    issues = json
  })
  let fetchDefault = fetchIssues('?fliter=all&per_page=4').then(json => {
    json.forEach(issue => {
      store[issue.id] = issue
    })
    issues = json
  })
  return Promise.race([fetchAll, fetchDefault])
}

export function archives () {
  // TODO:  按年份分类
  let archive = issues
  return archive
}

export function post (id) {
  return store[id]
}

export function blogs () {
  return issues.slice(0, 4)
}
