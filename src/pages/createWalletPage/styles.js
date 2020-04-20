import styled from 'styled-components'
import BackgroundMobile from 'assets/images/mobile-create-wallet-background.svg'
import Back from 'assets/icons/back-icon.svg'

export const BackTick = styled.img.attrs({ src: Back })`
  width: 50px;
  margin: 0;
  padding: 0;
  padding-bottom: 14px;
  padding-right: 10px;
`
export const BackButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`

export const InlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -50px;
`

export const Container = styled.div`
  height: 100%;
  width: 42.43%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 8%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 28.99% 16.67% 8% 16.67%;
    background: url(${BackgroundMobile}) white no-repeat;
    background-size: cover;
    justify-content: unset;
  }
`

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 14px;
  font-size: 3rem;
  font-weight: bold;
  color: #654cf0;
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
`

export const StepIndicator = styled.div`
  padding: 0 20px;
  height: 35px;
  background-color: #efecfe;
  border-radius: 30px;
  display: flex;
  width: 40.685%;
  white-space: nowrap;

  @media screen and (max-width: 600px) {
    padding: 0;
    width: 41.3%;
  }
`

export const StepText = styled.p`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 1rem;
`

export const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  flex-direction: column;
`
export const StepHeading = styled.h1`
  font-size: 2.9rem;
  font-weight: bold;
  color: #654cf0;
  margin: 10px 0 30px 0;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
    margin: 2.42% 0 12.36% 0;
  }
`
