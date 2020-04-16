import styled from "styled-components";
import BackgroundDesktop from "assets/images/desktop-landing-background.svg";

const Wrapper = styled.div`
  display: flex;
  background: url(${BackgroundDesktop}) white no-repeat center;
  background-size: contain;
  background-position: top left;
  height: 100%;
`;

export { Wrapper };
