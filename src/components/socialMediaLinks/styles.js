import styled from 'styled-components'
import TwitterIcon from 'assets/icons/twitter.svg'
import FacebookIcon from 'assets/icons/facebook.svg'
import WhatsappIcon from 'assets/icons/whatsapp.svg'

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 178px;
  height: 50px;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    margin: 20px auto 40px auto;
  }
`



export const SmallIcon = styled.img`
  width: 30px;
  margin: 0 20px 0 10px;
`

export const Facebook = styled(SmallIcon).attrs({ src: FacebookIcon })``
export const Twitter = styled(SmallIcon).attrs({ src: TwitterIcon })`
  margin-left: 1px;
  @media screen and (max-width: 768px) {
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
