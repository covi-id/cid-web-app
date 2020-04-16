import styled from 'styled-components'
import BackgroundDesktop from '../../assets/images/desktop-landing-background.svg'
import Logo from '../../assets/images/logo-dark.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: url(${BackgroundDesktop}) white no-repeat center;
  background-size: cover;
`
export const MainLogo = styled.img.attrs({ src: Logo })`
  width: 100%;
  height: 200px;
`

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 14px;

  font-size: 3rem;
  font-weight: bold;
  color: #654cf0;
`

export const Text = styled.div`
  width: 160px;
  height: 20px;
  vertical-align: middle;
  text-align: center;

  font-size: 1.06rem;
  letter-spacing: 0.01em;
  font-weight: bold;
  color: #654cf0;
  margin-right: 23px;
  padding-top: 4.5px;
  padding-left: 10px;
`
export const Header = styled.div`
  position: absolute;
  top: -2%;
  left: 5%;
`

export const StepIndicator = styled.div`
  width: 43%;
  height: 5%;
  margin-top: -2.1%;
  margin-bottom: 0.2%;
`

export const StepTextContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #efecfe;
  border-radius: 2em;
  vertical-align: middle;
`

export const StepText = styled.div`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 1.4vw;
`

export const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  width: 44%;
  margin-bottom: 1.3%;
`
export const StepHeading = styled.div`
  font-size: 2.8vw;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-family: 'Montserrat';
  color: #654cf0;
`
