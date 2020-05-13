import axios from "axios";
import nprogress from "nprogress";

import wallet from "./routes/wallet";
import { ENV } from "utils/environment";
import auth from "./routes/auth";
import walletFormContainer from "stateContainers/walletFormContainer";
import testResults from "./routes/testResult";

const instance = axios.create({
  baseURL: ENV.BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-api-key": ENV.X_API_KEY,
  },
});
instance.interceptors.request.use(
  (request) => {
    nprogress.start();
    request.headers = {
      ...request.headers,
      Authorization: walletFormContainer.state.token,
    };
    return request;
  },
  (error) => {
    nprogress.done();
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response.data;
  },
  async ({ response }) => {
    nprogress.done();
    return Promise.reject(response && response.data.meta.message);
  }
);

export default {
  wallet: wallet(instance),
  auth: auth(instance),
  testResults: testResults(instance),
};
