import axios from 'axios'
import nprogress from 'nprogress'

import wallet from './routes/wallet'
import { ENV } from 'utils/environment'

const instance = axios.create({
  baseURL: ENV.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-AgentId': ENV.X_AGENT_ID,
    'X-Subscription-Key': ENV.X_SUBSCRIPTION_KEY,
    Authorization: 'Bearer ' + ENV.BEARER,
  },
})
instance.interceptors.request.use(
  (request) => {
    nprogress.start()
    request.headers = {
      ...request.headers,
    }
    return request
  },
  (error) => {
    nprogress.done()
    return error
  }
)

instance.interceptors.response.use(
  (response) => {
    nprogress.done()
    return response.data
  },
  async ({ response }) => {
    return Promise.reject(response && response.data.meta.message)
  }
)

export default {
  wallet: wallet(instance),
}
