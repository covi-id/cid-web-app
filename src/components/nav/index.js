import React from 'react'

import CenterWrapper from 'components/centerWrapper'
import { MainLogo, Container, Header } from './styles'
import { useHistory, useLocation } from 'react-router-dom'

const Nav = ({ children }) => {
  const history = useHistory()
  const location = useLocation()

  const issueQR = location.pathname.includes('/dark')

  return (
    <Container>
      <Header>
        <MainLogo hide={issueQR} onClick={() => history.push('/')} />
      </Header>
      <CenterWrapper>{children}</CenterWrapper>
    </Container>
  )
}

export default Nav
