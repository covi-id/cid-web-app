import getData from '../utils/get-data'

export default function (instance) {
  return {
    signIn(body = {}, config = {}) {
      return instance.post(`/v1/users/signin`, body, config).then(getData)
    },

    createPassword(body = {}, config = {}) {
      return instance.put(`/v1/users/password_update`, body, config).then(getData)
    },
    createUser(body = {}, config = {}) {
      return instance.post(`/v1/users/signup`, body, config).then(getData)
    },
    requestReset(body = {}, config = {}) {
      return instance.post(`/resets`, body, config).then(getData)
    },
    postOtp(body = {}, config = {}) {
      return instance.post(`/v1/auth/otp_send`, body, config).then(getData)
    },
    signOut(body = {}, config = {}) {
      return instance.get(`/v1/signOut`, body, config).then(getData)
    },
  }
}
