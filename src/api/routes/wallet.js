import createJsonRpc from "api/utils/createJsonRpc";
import {
  CreateWallet,
  GetWallet,
  DeleteWalllet,
} from "api/utils/jsonRpcMethods";
import { ENV } from "utils/environment";

/**
 *
 * @param {import('axios').AxiosInstance} instance
 */
export default function wallet(instance) {
  return {
    /**
     *
     * @param {{
     *  encryptedData: string,
     *  userPubKey: string
     * }} body
     * @param {*} config
     */
    createWallet(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(CreateWallet, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
    },

    /**
     * @param {{
     *  encryptedData: string,
     *  userPubKey: string,
     *  encryptedUserId: string
     * }} body
     */
    deleteWallet(body, config = {}) {
      const jsonRpcBody = createJsonRpc(DeleteWalllet, body);
      return instance.delete(ENV.BASE_URL, jsonRpcBody, config);
    },

    /**
     *
     * @param {{
     *  encryptedData: string,
     *  userPubKey: string,
     *  encryptedUserId: string
     * }} body
     * @param {*} config
     */
    getWallet(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(GetWallet, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
    },
  };
}
