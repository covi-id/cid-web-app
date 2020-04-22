export default function (instance) {
  return {
    /**
     * @param {{
        {
          "name": "string",
          "surname": "string",
          "id": "string",
          "telNumber": "string",
          "picture": "string",
          "covidTest": {
            "refNumber": "string",
            "testDate": "2020-04-17T22:00:40.492Z",
            "expiryDate": "2020-04-17T22:00:40.492Z",
            "covidStatus": 0
          }
        }
    * @param {*} config 
    */
    createWallet(body = {}, config = {}) {
      return instance.post(`/Wallet/CoviID`, body, config)
    },
  }
}
