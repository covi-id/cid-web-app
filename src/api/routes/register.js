import getData from '../utils/get-data'

export default function (instance) {
  return {
    register(body = {}, config = {}) {
      return instance.post(`/Wallet/CoviID`, body, config).then(getData)
    },
  }
}
