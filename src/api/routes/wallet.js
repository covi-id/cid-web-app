import createJsonRpc from "api/utils/createJsonRpc";
import { CreateWallet } from "api/utils/jsonRpcMethods";
import { ENV } from "utils/environment";

/**
 *
 * @param {import('axios').AxiosInstance} instance
 */
export default function wallet(instance) {
  return {
    createWallet(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(CreateWallet, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
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

    deleteWallet(walletId, config = {}) {
      return instance.delete(`/wallets/${walletId}`, {}, config);
    },
  };
}
