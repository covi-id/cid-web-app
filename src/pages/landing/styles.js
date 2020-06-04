import styled from "styled-components";

import FirstIcon from "assets/icons/landing-icon.svg";
import * as ButtonLink from "components/buttonLink/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 55px;

  @media screen and (max-width: 768px) {
    align-items: unset;
    margin-top: 30px;
  }
`;

export const Icon = styled.img`
  width: 30.77%;
  margin: 0 auto 8.91% auto;
`;

export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``;

export const Heading = styled.h2`
  width: 100%;
  margin: 0;
  margin-bottom: 19.43%;

  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${ButtonLink.Container} {
    margin-bottom: 24px;
  }

  ${ButtonLink.InternalLinkContainer} {
    margin-bottom: 24px;
  }
`;
export const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const DeleteContainer = styled.div`
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
