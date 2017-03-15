import {github} from './api'

const store = {}
export let issues = []
export let page = 0
export let perPage = 4

export function initFetch () {
  return github('issues').then(response => {
    cacheIssue(response.data)
  }).catch(error => {
    initFetch()
  })
}

function cacheIssue(issueList) {
  issueList.forEach((issue, index) => {
    issue._index = index
    store[issue.id] = issue
  })
  issues = issueList
}

export function archives () {
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
  // return issues[index]
  return store[id]
}

export function blogs (page) {
  page = Number(page) - 1
  return issues.slice(page, page + perPage)
}
