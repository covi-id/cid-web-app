import createJsonRpc from "api/utils/createJsonRpc";
import { NewTaskEncryptionKey } from "api/utils/jsonRpcMethods";
import { ENV } from 'utils/environment';

/**
 *
 * @param {import('axios').AxiosInstance} instance
 */
export default function encryption(instance) {
  return {
    /**
       * @param {
          {
            userPubKey: string
          }} body
      * @param {*} config 
      */
    getNewEncryptionKey(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(NewTaskEncryptionKey, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
    },
  };
}
