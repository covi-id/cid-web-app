const { REACT_APP_BASE_URL, NODE_ENV, REACT_APP_X_AGENT_ID } = process.env;

export const ENV = {
  BASE_URL: REACT_APP_BASE_URL,
  X_AGENT_ID: REACT_APP_X_AGENT_ID,
  NODE_ENV
};

const missingKeys = ["BASE_URL", "NODE_ENV", "X_AGENT_ID"].filter(
  key => !ENV[key]
);

if (missingKeys.length) {
  ENV.MISSING_CONFIG = missingKeys.join(", ");
}

export const environments = {
  dev: "develop",
  prod: "prod"
};
