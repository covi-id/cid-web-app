import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 40px;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(101, 76, 240, 0.2);

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: "";
        position: absolute;
        display: none;
        display: block;
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #03ce8e;
      }
    `}
`;

const Label = styled.span`
  color: #654cf0;
  font-weight: bold;
  font-size: 17px;
`;

const Options = styled.div`
  display: flex;
`;

export { Container, Checkmark, Label, Options };
