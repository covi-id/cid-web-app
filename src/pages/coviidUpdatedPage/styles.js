import styled from 'styled-components'
import FirstIcon from 'assets/icons/coviidIcon.svg'
import * as SocialMediaLinks from 'components/socialMediaLinks/styles'
import * as ButtonLink from 'components/buttonLink/styles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    align-items: unset;
    background-size: cover;
    flex-direction: column;
  }
`
export const SocialText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`

export const Icon = styled.img`
  width: 68px;
  margin: 80px auto 10px auto;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    width: 315px;
    height: 138px;
    margin: 10px auto;
  }

  @media screen and (max-width: 768px) {
    width: 290px;
    height: 138px;
    margin: 10px auto;
  }
`

export const SocialMediaOverride = styled.div`
  ${SocialMediaLinks.SocialWrapper} {
    margin: 10px auto 20px auto;
  }
`
//if the link below is changed to an href,
// the selector needs to be changed to .Container instead of InternalLinkContainer

export const ButtonLinkOverride = styled.div`
  margin-bottom: 16px;
  ${ButtonLink.InternalLinkContainer} {
    min-width: 145px;
    max-width: 145px;

    @media screen and (max-width: 600px) {
      margin-top: 18px;
    }
  }
`
