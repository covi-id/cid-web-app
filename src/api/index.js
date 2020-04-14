import axios from 'axios'

import auth from './routes/auth'

import {BASE_URL} from './utils/constants'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
})

instance.BASE_URL = BASE_URL

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
