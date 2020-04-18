import { Container } from 'unstated'

const DEFAULT_STATE = {
  name: '',
  surname: '',
  id: '',
  telNumber: '',
  picture: '',
  covidTest: {
    testDate: '',
    expiryDate: '',
    covidStatus: 0,
  },
  walletParameters: {
    ownerName: '',
  },
  covidStatusUrl: '',
}

class WalletFormContainer extends Container {
  constructor() {
    super()
    this.state = DEFAULT_STATE
  }

  set = async (data = {}) => {
    const newState = {
      ...this.state,
      ...data,
    }
    this.setState(newState)
    return Promise.resolve()
  }

  clear = () => {
    this.setState(DEFAULT_STATE)
  }
}

export default new WalletFormContainer()
