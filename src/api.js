import axios from 'axios'
import base64 from 'base64-url'
const TOKEN = 'MWZiZGIwM2I5ZTBmNmM5NDQxNWYwYWZmNWQ4YmJmYzFhMTVlN2YyYw'

export const github = axios.create({
  baseURL: 'https://api.github.com/repos/hefei00/blog/',
  timeout: 3000,
  headers: {
    Authorization: `token ${base64.decode(TOKEN)}`
  }
})
