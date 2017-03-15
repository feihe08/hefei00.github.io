import axios from 'axios';
import base64 from 'base64-url';
const TOKEN = 'Nzg0ZmE0ZmU4ZDY2ZjU4ZDJjNzgyMGZhMGNiNDI5NGJkZTc0NTk2ZQ';

export const github = axios.create({
  baseURL: 'https://api.github.com/repos/hefei00/blog/',
  timeout: 10000,
  headers: {
    Authorization: `token ${base64.decode(TOKEN)}`
  }
});
