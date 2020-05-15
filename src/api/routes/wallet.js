export default function wallet(instance) {
  return {
    /**
     * @param {
        {
          mobileNumber: string,
          mobileNumberReference: string
        }}
    * @param {*} config 
    */
    createWallet(body = {}, config = {}) {
      return instance.post(`/wallets`, body, config);
    },

    /**
     * @param {string} sessionId 
     * @param {
      {
        mobileNumber: string,
        mobileNumberReference: string
      }}
  * @param {*} config 
  */
    createWalletWithSessionId(sessionId, body = {}, config = {}) {
      return instance.post(`/wallets/${sessionId}`, body, config);
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
    },
  };
}
