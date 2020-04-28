export default function auth(instance) {
  return {
    /**
       * @param {{
          {
            "walletId": "string",
            "otp": "string",
            "person": {
                "firstName": "string",
                "lastName": "string",
                "mobileNumber": "string",
                "photo": "base64 (without mime)",
                "identificationType": "string",
                "identificationValue": "string"
            },
          }
      * @param {*} config 
      */
    confirmOtp(body = {}, config = {}) {
      return instance.post(`/auth/otp`, body, config);
    },

    /**
     * @param {{
     *  walletId: string,
     *  mobileNumber: string
     * }} body
     * @param {*} config
     */
    resendOtp(body = {}, config = {}) {
      return instance.post(`/auth/otp/resend`, body, config);
    }
  };
}
