import { Container } from "unstated";

const DEFAULT_STATE = {
  walletId: "CZCRldtjRJneEUTzRSVy63ArOegft5M5k",
  otp: "",
  person: {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    consent: "",
    photo: "",
    identificationType: "",
    identificationValue: "",
    countryCode: ""
  },
  covidTest: {
    dateTested: "",
    covidStatus: 0,
    laboratory: 0,
    referenceNumber: "",
    hasConsent: false
  },
  covidStatusUrl: "",
  picture: ""
};

class WalletFormContainer extends Container {
  constructor() {
    super();
    this.state = DEFAULT_STATE;
  }

  set = async (data = {}) => {
    const newState = {
      ...this.state,
      ...data
    };
    this.setState(newState);
    return Promise.resolve();
  };

  clear = () => {
    this.setState(DEFAULT_STATE);
  };
}

export default new WalletFormContainer();
