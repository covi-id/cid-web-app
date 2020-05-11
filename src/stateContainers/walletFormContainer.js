import { Container } from "unstated";

const DEFAULT_STATE = {
  walletId: "",
  otp: "",
  walletDetails: {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    consent: "",
    photo: "",
    idType: "",
    IdValue: "",
    countryCode: "",
  },
  covidTest: {
    testedAt: "",
    covidStatus: 0,
    laboratory: 0,
    referenceNumber: "",
    hasConsent: false,
  },
  covidStatusUrl: "",
  picture: "",
  token: "",
  key: "",
};

class WalletFormContainer extends Container {
  constructor() {
    super();
    this.state = DEFAULT_STATE;
  }

  set = async (data = {}) => {
    const newState = {
      ...this.state,
      ...data,
    };
    this.setState(newState);
    return Promise.resolve();
  };

  clear = () => {
    this.setState(DEFAULT_STATE);
  };
}

export default new WalletFormContainer();
