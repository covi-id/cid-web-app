import axios from "axios";

import wallet from "./routes/wallet";
import { ENV } from "utils/environment";
import auth from "./routes/auth";
import walletFormContainer from "stateContainers/walletFormContainer";
import testResults from "./routes/testResult";
import encryption from "./routes/encryption";
import mobileVerification from "./routes/mobileVerification";

const instance = axios.create({
  baseURL: ENV.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": ENV.X_API_KEY,
  },
});
instance.interceptors.request.use(
  (request) => {
    request.headers = {
      ...request.headers,
      Authorization: walletFormContainer.state.token,
    };
    return request;
  },
  (error) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async ({ response }) => {
    return Promise.reject(response && response.data.meta.message);
  }
);

export default {
  wallet: wallet(instance),
  auth: auth(instance),
  testResults: testResults(instance),
  encryption: encryption(instance),
  mobileVerification: mobileVerification(instance),
};
