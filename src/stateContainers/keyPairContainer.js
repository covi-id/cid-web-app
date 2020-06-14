import { Container } from "unstated";

const DEFAULT_STATE = {
  privateKey: null,
  publicKey: null,
};

class KeyPairContainer extends Container {
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

export default new KeyPairContainer();
