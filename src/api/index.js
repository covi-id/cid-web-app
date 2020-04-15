import axios from 'axios'

import auth from './routes/auth'


const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {'Content-Type': 'application/json'},
})

instance.BASE_URL = process.env.REACT_APP_BASE_URL

instance.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    console.error(error)
    return Promise.reject(error.response)
  }
)


export default {
  auth: auth(instance),
}
