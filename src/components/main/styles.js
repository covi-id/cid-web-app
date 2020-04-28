import styled, { css } from "styled-components";
import BackgroundDesktop from "assets/images/desktop-landing-background.svg";
import BackgroundMobile from "assets/images/mobile-landing-background.svg";
import BackgroundDesktopDark from "assets/images/desktop-purple-background.svg";

const Wrapper = styled.div`
  display: flex;
  background: ${({ background }) =>
    background
      ? `url(${background.desktop}) white no-repeat center;`
      : `url(${BackgroundDesktop}) white no-repeat center;`};
  background-size: cover;
  background-position: bottom left;
  height: 100vh;

  @media screen and (max-width: 768px) {
    background: ${({ background }) =>
      background
        ? `url(${background.mobile}) #f1f1f8 no-repeat center;`
        : `url(${BackgroundMobile}) white no-repeat center;`};
    background-size: contain;
    background-position: top left;

    min-height: 100vh;
  }
`;

export { Wrapper };
