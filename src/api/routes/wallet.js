export default function wallet(instance) {
  return {
    /**
     * @param {{
        {
          "firstName": "string",
          "lastName": "string",
          "mobileNumber": "string",
          "photo": "string"
        }
    * @param {*} config 
    */
    createWallet(body = {}, config = {}) {
      return instance.post(`/Wallet/CoviID`, body, config);
    }
  };
}
