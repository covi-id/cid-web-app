import styled from 'styled-components'

import FirstIcon from 'assets/icons/landing-icon.svg'
import BackgroundMobile from 'assets/images/mobile-landing-background.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    background: url(${BackgroundMobile}) white no-repeat center;
    align-items: unset;
  }
`

export const Icon = styled.img`
  width: 30.77%;
  margin: 0 auto 8.91% auto;
`

export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``

export const TextContainer = styled.div`
  justify-content: center;
  width: 472px;
  height: 257px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  padding: 10px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`
export const Text = styled.div`
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7c7795;
  margin-bottom: 22px;
  margin-top: 20px;
`

export const Bold = styled.div`
  font-weight: bold;
  color: #7c7795;
  margin-bottom: 5px;
`

export const LargeText = styled.div`
  color: #513cc5;
  font-size: 22px;
  font-weight: bold;
  line-height: 160%;
  width: 100%;
  white-space: nowrap;
  margin-top: 10px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 628px;
  height: 482px;
  background: #ffffff;
  box-shadow: 3px 3px 15px #ececec;
  border-radius: 2em;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 410px;
  margin: 0 auto;
  margin-top: 50px;
`
