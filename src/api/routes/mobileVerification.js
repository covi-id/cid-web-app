import createJsonRpc from "api/utils/createJsonRpc";
import { ENV } from "utils/environment";
import { MobileConfirm, MobileVerify } from "api/utils/jsonRpcMethods";

/**
 *
 * @param {import('axios').AxiosInstance} instance
 */
export default function mobileVerification(instance) {
  return {
    /**
     *
     * @param {{
     * userPubKey: string,
     * encryptedData: string,
     * encryptedUserId: string
     * }} body
     * @param {import('axios').AxiosRequestConfig} config
     */
    confirm(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(MobileConfirm, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
    },

    /**
     * @param {{
     * userPubKey: string,
     * encryptedUserId: string,
     * mobileNumber: string
     * }} body
     * @param {import('axios').AxiosRequestConfig} config
     */
    resend(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(MobileVerify, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
    },
  };
}
