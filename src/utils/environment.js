const {
  REACT_APP_BASE_URL,
  NODE_ENV,
  REACT_APP_X_AGENT_ID,
  REACT_APP_X_SUBSCRIPTION_KEY,
  REACT_APP_BEARER,
} = process.env

export const ENV = {
  BASE_URL: REACT_APP_BASE_URL,
  X_AGENT_ID: REACT_APP_X_AGENT_ID,
  X_SUBSCRIPTION_KEY: REACT_APP_X_SUBSCRIPTION_KEY,
  BEARER: REACT_APP_BEARER,
  NODE_ENV,
}

const missingKeys = [
  'BASE_URL',
  'NODE_ENV',
  'X_AGENT_ID',
  'X_SUBSCRIPTION_KEY',
  'REACT_APP_BEARER',
].filter((key) => !ENV[key])

if (missingKeys.length) {
  ENV.MISSING_CONFIG = missingKeys.join(', ')
}

export const environments = {
  dev: 'develop',
  prod: 'prod',
}
