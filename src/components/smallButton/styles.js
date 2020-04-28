import styled, { css } from "styled-components";

const BtnContainer = styled.button`
  display: flex;
  text-decoration: none;
  height: 60px;
  justify-content: space-evenly;
  margin-top: 20px;
  align-items: center;
  border-radius: 60px;
  font-weight: bold;
  padding: 5px;
  min-width: 180px;
  margin: 0 14px;
  border: none;

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
