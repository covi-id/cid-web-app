import styled from "styled-components";

import FirstIcon from "assets/icons/landing-icon.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Icon = styled.img`
  width: 100px;
  margin: 0 auto 30px auto;
`;

export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``;

export const Heading = styled.h2`
  width: 100%;
  height: 100%;
  margin: 0;
  margin-bottom: 14px;

  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`;
