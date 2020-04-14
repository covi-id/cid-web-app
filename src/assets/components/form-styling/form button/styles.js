import styled from 'styled-components'

export const SubmitButton = styled.button`
  :active,
  :focus {
    outline: none;
  }
  border: 2px solid #e2723b;
  background-color: #e2723b;
  color: #ffffff;
  border-radius: 15px;
  width: 50%;
  padding: 9px 10px;
  letter-spacing: 2px;
  margin-top: 5px;
  align-self: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  display: inline-flex;
  min-height: 26px;
  min-width: 40px;
  justify-content: center;
  outline: none;
  transition: background-color 1.2s;

  @media screen and (min-width: 100px) {
    min-height: 30px;
    justify-content: center;
    font-size: 17px;
    min-width: 130px;
  }

  @media screen and (min-width: 737px) {
    font-size: 16px;
    min-height: 30px;
    margin: 0px 5px;
    justify-content: center;
  }

  @media screen and (min-width: 767px) {
    height: 60px;
    width: 80%;
    font-size: 22px;
  }

  @media screen and (min-height: 811px) {
    min-height: 30px;
    justify-content: center;
    font-size: 17px;
    min-width: 130px;
  }

  @media screen and (min-height: 1023px) {
    height: 60px;
    width: 80%;
    font-size: 22px;
  }

  @media screen and (min-height: 1023px) {
    font-size: 25px;
  }

  :active,
  :focus {
    background-color: #de5d1e;
  }
`
export const Center = styled.div`
  text-align: center;
  align-content: center;

  @media screen and (max-width: 325px) {
    padding-top: 10px;
  }

  @media screen and (min-width: 374px) {
    padding-top: 30px;
  }

  @media screen and (min-width: 413px) {
    padding-top: 70px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-height: 1023px) {
    padding-top: 110px;
  }

  @media screen and (min-height: 1335) {
    padding-top: 160px;
  }
`
