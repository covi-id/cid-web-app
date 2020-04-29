export default function getWalletIdFromCovidStatusUrl(value) {
  const covidStatusUrlPattern = /\/api\/verifier\/(\w{0,})\/covid-credentials/g;
  const match = covidStatusUrlPattern.exec(value);

  try {
    return match[1];
  } catch (err) {
    throw err;
  }
}
