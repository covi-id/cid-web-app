import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin: 10px 0px;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.2s ease-out;
  border-radius: 60px;
  min-height: 50px;
  max-height: 50px;
  pointer-events: ${(props) => props.disabled && 'none'};
  background-color: #e9e4ff;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
      background-color: #e9e4ff;
    `}
`

const Title = styled.label`
  color: #000000;
  font-size: 1rem;
  margin-left: 19px;
  margin-bottom: 1px;
`

const Value = styled.label`
  color: #4d4d4d;
  padding: 13px 0 16px 20px;
  width: 100%;
  font-size: 1rem;
  transition: 0.2s ease-out;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ showPlaceholder }) =>
    showPlaceholder &&
    css`
      font-weight: 500;
      font-size: 1rem;
      line-height: 110%;
      align-items: center;
    `}
`

const List = styled.ul`
  position: absolute;
  background-color: #e9e4ff;
  max-height: 110px;
  box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
  border-radius: 28px;
  width: 100%;
  margin: 8px 0 0 0;
  list-style: none;
  font-size: 0.875rem;
  overflow-y: scroll;
  text-align: left;
  z-index: 10;
  padding-inline-start: 0;
  overflow-x: hidden;

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
`

const Item = styled.li`
  height: 50px;
  padding: 10px 40px;
  color: #000000;
  font-weight: normal;
  font-size: 1rem;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: #e9e4ff;
  }

  ${({ selected }) =>
    selected &&
    css`
      font-weight: 500;
      background-color: #e9e4ff;
    `}
`

const Icon = styled.img`
  transition: 0.2s ease-in;
  margin-right: 20px;
  padding-left: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`

export { Wrapper, Header, Title, List, Item, Icon, Value }
