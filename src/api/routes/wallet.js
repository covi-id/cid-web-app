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
      return instance.post(`/wallet/CoviID`, body, config);
    },

    /**
     *
     * @param {string} walletId
     * @param {{
     *  dateTested: Date
     *  covidStatus: "string",
     *  laboratory: string,
     *  referenceNumber: string,
     *  hasConsent: boolean
     * }} body
     * @param {*} config
     */
    updateTest(walletId = "", body = {}, config = {}) {
      return instance.put(`/wallet/${walletId}/coviid`, body, config);
    }
  };
}
