import styled from "styled-components";

import FirstIcon from "assets/icons/landing-icon.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    align-items: unset;
    margin-top: 30px;
  }
`;

const Icon = styled.img`
  width: 30.77%;
  margin: 0 auto 8.91% auto;
`;

const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7c7795;
  margin: 0;
`;

const Bold = styled.strong`
  font-weight: bold;
  color: #7c7795;
`;

const LargeText = styled.div`
  color: #513cc5;
  font-size: 22px;
  font-weight: bold;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 410px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// NEW STYLES
const Heading = styled.h3`
  font-size: 32px;
  text-align: center;
  color: #7c7795;
  font-weight: normal;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 628px;
  width: 100%;
  /* height: 482px; */
  background: #ffffff;
  box-shadow: 3px 3px 15px #ececec;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  padding: 60px 70px;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    padding: 20px;
  }
`;

export {
  Heading,
  ButtonWrapper,
  Card,
  LargeText,
  Bold,
  Text,
  TextContainer,
  LandingIcon,
  Container,
  Icon,
};
