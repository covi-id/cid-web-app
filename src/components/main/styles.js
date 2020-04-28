import styled, { css } from 'styled-components'
import BackgroundDesktop from 'assets/images/desktop-landing-background.svg'
import BackgroundMobile from 'assets/images/mobile-landing-background.svg'
import BackgroundDesktopDark from 'assets/images/desktop-purple-background.svg'

const Wrapper = styled.div`
  display: flex;
  background: url(${BackgroundDesktop}) white no-repeat center;
  background-size: cover;
  background-position: bottom left;
  height: 100%;

  ${({ darkInd }) =>
    darkInd &&
    css`
      background: url(${BackgroundDesktopDark}) white no-repeat center;
      background-size: cover;
    `}

  @media screen and (max-width: 600px) {
    background: url(${BackgroundMobile}) white no-repeat center;
  }
`

export { Wrapper }
