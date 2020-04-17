import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 10px 0px;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: background-color 0.2s;
  box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
  background-color: #b2a5f7;
  border-radius: 40px;
  min-height: 50px;
  pointer-events: ${props => props.disabled && "none"};
`;

const Title = styled.label`
  color: #ffffff;
  font-size: 16px;
  margin-left: 19px;
`;

const Value = styled.label`
  color: white;
  padding: 16px 0 16px 20px;
  width: 100%;
  font-size: 16px;
  transition: 0.2s ease-out;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ showPlaceholder }) =>
    showPlaceholder &&
    css`
      font-weight: 500;
      font-size: 16px;
      line-height: 110%;
      align-items: center;
    `}
`;

const List = styled.ul`
  position: absolute;
  background-color: #b2a5f7;
  max-height: 110px;
  box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
  border-radius: 28px;
  width: 100%;
  margin: 8px 0 0 0;
  padding: 10px 40px;
  list-style: none;
  font-size: 14px;
  overflow-y: scroll;
  text-align: left;
  z-index: 10;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(124, 113, 132, 0.3);
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(124, 113, 132, 1);
  }
`;

const Item = styled.li`
  height: 30px;
  color: ${props => (props.selected ? "#44344F" : "#7C7184")};
  font-size: 12px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #44344f;
  }
`;

const Icon = styled.img`
  transition: 0.2s ease-in;
  margin-right: 20px;
  display: ${props => (props.show ? "block" : "none")};

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export { Wrapper, Header, Title, List, Item, Icon, Value };
