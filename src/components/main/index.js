import React from 'react'

import { Wrapper } from './styles'
import Nav from 'components/nav'
import { useLocation } from 'react-router-dom'

const Main = ({ children }) => {
  const location = useLocation()
  return (
    <Wrapper darkInd={location.pathname.includes('consent/coviid-updated')}>
      <Nav>{children}</Nav>
    </Wrapper>
  )
}

export default Main
