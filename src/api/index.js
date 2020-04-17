import axios from "axios";

import wallet from "./routes/wallet";
import { ENV } from "utils/environment";

const instance = axios.create({
  baseURL: ENV.BASE_URL,
  headers: { "Content-Type": "application/json", "X-AgentId": ENV.X_AGENT_ID }
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    console.error(error);
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  response => response.data,
  async ({ response }) => {
    return Promise.reject(response && response.data.meta.message);
  }
);

export default {
  wallet: wallet(instance)
};
