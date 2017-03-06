import {github} from './api'

const store = {}
let issues = []

export function initFetch () {
  return github('issues').then(response => {
    cacheIssue(response.data)
  })

  // NOTE: 一次请求所有数据的话，速度太慢
  // return github('/repos/xufei/blog/issues?fliter=all&per_page=4').then(response => {
  //   cacheIssue(response.data)
  // })
}

function cacheIssue(issueList) {
  issueList.forEach(issue => {
    store[issue.id] = issue
  })
  issues = issueList
}

export function archives () {
  // TODO:  按年份分类
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

export function post (id) {
  return store[id]
}

export function blogs () {
  return issues.slice(0, 4)
}
