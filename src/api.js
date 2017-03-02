import fetch from 'isomorphic-fetch'

const url = 'https://api.github.com/repos/heeefei/blog/issues'

export function fetchIssues (filter) {
  let urlWithFilter = filter ? url + filter : url
  return fetch(urlWithFilter).then(response => response.json()).then(data => {
    if (data.errors) {
      return Promise.reject(data)
    }
    return data
  }).catch((...args) => {
    return Promise.reject(...args)
  })
}
