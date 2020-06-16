import { Container } from "unstated";

const DEFAULT_STATE = {
  wallet_id: "",
  otp: "",
  walletDetails: {
    first_name: "",
    last_name: "",
    mobile_number: "",
    has_consent: "",
    photo_reference: "",
    country_code: "",
  },
  covidTest: {
    has_received_results: false,
    result_status: "",
    laboratory: "",
    reference_number: "",
  },
  covidStatusUrl: "",
  token: "",
  key: "",
  sessionId: "",
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
