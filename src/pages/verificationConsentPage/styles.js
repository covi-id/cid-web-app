import styled from "styled-components";

import FirstIcon from "assets/icons/landing-icon.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    align-items: unset;
  }
`;

export const Icon = styled.img`
  width: 30.77%;
  margin: 0 auto 8.91% auto;
`;

export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``;

export const TextContainer = styled.div`
  justify-content: center;
  max-width: 472px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
  }
`;
export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7c7795;
  margin: 0;
`;

export const Bold = styled.strong`
  font-weight: bold;
  color: #7c7795;
`;

export const LargeText = styled.div`
  color: #513cc5;
  font-size: 22px;
  font-weight: bold;
  width: 100%;
`;

export const Card = styled.div`
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

  padding: 50px 30px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 410px;
  width: 100%;
  margin: 0 auto;
  /* margin-top: 50px; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
