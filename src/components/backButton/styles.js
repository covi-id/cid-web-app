import styled from "styled-components";
import Back from "assets/icons/back-icon.svg";

const BackButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

const BackTick = styled.img.attrs({ src: Back })`
  width: 50px;
  margin: 0;
  padding: 0;
  padding-top: 6px;
  padding-right: 10px;

  @media screen and (max-width: 600px) {
    padding-bottom: 27px;
    padding-right: 3px;
    width: 33px;
  }
`;

export { BackButton, BackTick };
