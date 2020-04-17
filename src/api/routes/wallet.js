export default function(instance) {
  return {
    /**
     * @param {{
        "name": string,
        "surname": string,
        "id": string,
        "telNumber": string,
        "picture": string,
        "covidTest": {
            "testDate": Date,
            "expiryDate": Date,
            "covidStatus": number
        },
        "walletParameters": {
            "walletId": string,
            "ownerName": string
        }} } body 
    * @param {*} config 
    */
    createWallet(body = {}, config = {}) {
      return instance.post(`/Wallet/CoviID`, body, config);
    }
  };
}
