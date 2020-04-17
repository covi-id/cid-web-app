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

  font-size: 3rem;
  font-weight: bold;
  color: #654cf0;
<<<<<<< HEAD
`;
=======
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
export const Opener = styled.a`
  text-decoration: none;
  height: 0px;
  width: 0px;
  justify-content: center;

  padding-left: 8.5%;
  padding-bottom: 18%;
`
>>>>>>> a6b11334e2316044bbf28045dc0b62e64f8d7ba2
