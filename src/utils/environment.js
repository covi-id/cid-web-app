const {
  REACT_APP_BASE_URL,
  NODE_ENV,
  REACT_APP_X_API_KEY,
  REACT_APP_RECAPTCHA_SITE_KEY
} = process.env;

export const ENV = {
  BASE_URL: REACT_APP_BASE_URL,
  X_API_KEY: REACT_APP_X_API_KEY,
  SITE_KEY: REACT_APP_RECAPTCHA_SITE_KEY,
  NODE_ENV
};

const missingKeys = [
  "BASE_URL",
  "NODE_ENV",
  "X_API_KEY",
  "REACT_APP_SITE_KEY"
].filter(key => !ENV[key]);

if (missingKeys.length) {
  ENV.MISSING_CONFIG = missingKeys.join(", ");
}

export const environments = {
  dev: "develop",
  prod: "prod"
};
