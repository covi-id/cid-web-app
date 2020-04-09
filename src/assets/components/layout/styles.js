import styled from 'styled-components'
import BackgroundDesktop from '../../images/desktop-landing-background.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  background-image: url(${BackgroundDesktop});
  background-size: cover;
  overflow-x: hidden;
  background-position: center;
`

