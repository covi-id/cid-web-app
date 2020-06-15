import { ENV } from "utils/environment";
import createJsonRpc from "api/utils/createJsonRpc";
import { AddWalletTestResult } from "api/utils/jsonRpcMethods";

/**
 * @typedef {'Covid19'} TestType
 * @typedef {'Unsent'|'InProgress'|'Verified'} LaboratoryStatus
 * @typedef {0|1|2} Laboratory
 * @typedef {0|1|2} ResultStatus
 * @typedef {{
            test_type: TestType,
            laboratory_status: LaboratoryStatus, 
            has_received_results: string,
            result_status: ResultStatus,
            laboratory: Laboratory,
            tested_at: string,
            issued_at: string,
            reference_number: string,
            has_consent: boolean,
            permission_granted_at: string,
            created_at: Date
          }} AddTestResult
 *
 * @param {*} instance
 */

export default function testResults(instance) {
  return {
    /**
       * @param {{
       * encryptedData: string,
       * userPubKey: string
      }} body
      * @param {*} config 
      */
    addTestResult(body = {}, config = {}) {
      const jsonRpcBody = createJsonRpc(AddWalletTestResult, body);
      return instance.post(ENV.BASE_URL, jsonRpcBody, config);
    },
  };
}
