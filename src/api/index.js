import axios from 'axios'
import auth from './routes/auth'

const instance = axios.create({
  baseURL: 'http://api.coviid.me/api/',
  headers: { 'Content-Type': 'application/json' },
})

instance.BASE_URL = 'http://api.coviid.me/api/'

instance.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    console.log(error)
    return Promise.reject(error.response)
  }
)

export default {
  auth: auth(instance),
}
