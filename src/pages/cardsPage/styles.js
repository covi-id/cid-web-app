import styled from 'styled-components'

import FirstIcon from 'assets/icons/landing-icon.svg'
import BackgroundMobile from 'assets/images/mobile-landing-background.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    background: url(${BackgroundMobile}) white no-repeat center;
    align-items: unset;
  }
`

export const Icon = styled.img`
  width: 30.77%;
  margin: 0 auto 8.91% auto;
`

export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``

export const Heading = styled.h2`
  width: 310px;

  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`
export const HeadingContainer = styled.div`
  margin-bottom: 60px;
  margin-top: -50px;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -50px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: -140px;
  }
`
