import React from 'react'

import CenterWrapper from 'components/centerWrapper'
import { MainLogo, Container, Header } from './styles'
import { useHistory } from 'react-router-dom'

const Nav = ({ children }) => {
  const history = useHistory()
  return (
    <Container>
      <Header>
        <MainLogo onClick={() => history.push('/')} />
      </Header>
      <CenterWrapper>{children}</CenterWrapper>
    </Container>
  )
}

export default Nav
