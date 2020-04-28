import styled from 'styled-components'
import FirstIcon from 'assets/icons/coviidIcon.svg'
import BackgroundMobileDark from 'assets/images/mobile-purple-background.svg'
import TwitterIcon from 'assets/icons/twitter.svg'
import FacebookIcon from 'assets/icons/facebook.svg'
import WhatsappIcon from 'assets/icons/whatsapp.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    background: url(${BackgroundMobileDark}) white no-repeat center;
    align-items: unset;
    background-size: cover;
    flex-direction: column;
  }
`

export const Icon = styled.img`
  width: 68px;
  margin: -80px auto 10px auto;

  @media screen and (max-width: 600px) {
    width: 48px;
    margin: 80px auto 10px auto;
  }
`

export const CoviidIcon = styled(Icon).attrs({ src: FirstIcon })``

export const TextContainer = styled.div`
  justify-content: center;
  width: 350px;
  height: 257px;
  text-align: center;
  margin: 0 auto;
  vertical-align: middle;
  display: flex;
  padding: 10px;

  @media screen and (max-width: 600px) {
    width: 200px;
  }
`
export const Heading = styled.div`
  font-size: 48px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 20px;
`

export const SmallText = styled.div`
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: auto;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 481px;
  height: 117px;
  left: 478px;
  top: 282.01px;
  background: #6950f6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 315px;
    height: 138px;
    margin: 10px auto;
  }

  @media screen and (max-width: 600px) {
    width: 290px;
    height: 138px;
    margin: 10px auto;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 178px;
  height: 50px;

  @media screen and (max-width: 600px) {
    width: 280px;
    margin: 10px auto 70px auto;
  }
`
export const SocialLinks = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin: 20px auto 40px auto;
  }
`

export const SocialText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`

export const SmallIcon = styled.img`
  width: 30px;
  margin: 0 20px 0 10px;
`

export const Facebook = styled(SmallIcon).attrs({ src: FacebookIcon })``
export const Twitter = styled(SmallIcon).attrs({ src: TwitterIcon })`
  margin-left: -4px;
  @media screen and (max-width: 600px) {
    margin-left: 14px;
  }
`
export const Whatsapp = styled(SmallIcon).attrs({ src: WhatsappIcon })`
  width: 20px;
  margin-top: 5px;
`
export const ExternalLink = styled.a`
  text-decoration: none;
`
