import styled, { css } from "styled-components";

const BtnContainer = styled.button`
  display: flex;
  text-decoration: none;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 60px;
  font-weight: bold;
  padding: 5px;
  min-width: 180px;
  margin: 10px auto;
  border: none;
  max-width: 180px;

  ${({ background, color }) =>
    css`
      background: ${background || "#03f5a9"};
      color: ${color || "#654cf0"};
    `}

  &:hover {
    background-color: #02e8a0;
    color: #8255ff;
  }
`;

const BtnText = styled.span`
  padding: 10px;
  padding-bottom: 13px;
  font-size: 16px;
  width: 210px;
`;

export { BtnContainer, BtnText };
