import styled from "styled-components";
import BackgroundDesktop from "../../assets/images/desktop-landing-background.svg";
import Logo from "../../assets/images/logo-dark.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const MainLogo = styled.img.attrs({ src: Logo })`
  width: 100%;
  height: 200px;
`;

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 14px;

  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`;

export const Text = styled.div`
  width: 160px;
  height: 20px;
  vertical-align: middle;
  text-align: center;

  font-size: 17px;
  letter-spacing: 0.01em;
  font-weight: bold;
  color: #654cf0;
  margin-right: 23px;
  padding-top: 4.5px;
  padding-left: 10px;
`;
export const Header = styled.div`
  position: absolute;
  top: -2%;
  left: 5%;
`;

export const StepIndicator = styled.div`
  padding: 0 20px;
  height: 35px;
  background-color: #efecfe;
  border-radius: 30px;
  display: flex;
`;

export const StepText = styled.p`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 16px;
`;

export const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  width: 44%;
  margin-bottom: 1.3%;
`;
export const StepHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`;
