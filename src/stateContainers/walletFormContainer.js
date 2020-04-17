import { Container } from "unstated";

const DEFAULT_STATE = {
  name: "",
  surname: "",
  id: "",
  telNumber: "",
  picture: "",
  covidTest: {
    testDate: "",
    expiryDate: "",
    covidStatus: 0
  },
  walletParameters: {
    ownerName: ""
  }
};

class WalletFormContainer extends Container {
  constructor() {
    super();
    this.state = DEFAULT_STATE;
  }

  set = (data = {}) => {
    const newState = {
      ...this.state,
      ...data
    };

    return this.setState(newState, () => console.log(newState));
  };

  clear = () => {
    this.setState(DEFAULT_STATE);
  };
}

export default new WalletFormContainer();
