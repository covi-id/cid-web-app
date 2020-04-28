import React from 'react'
import {
  SocialWrapper,
  SocialLinks,
  Facebook,
  Twitter,
  Whatsapp,

  ExternalLink,
} from './styles'

const SocialMediaLinks = () => {
  return (
    <SocialWrapper>
     
      <SocialLinks>
        <ExternalLink
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/sharer/sharer.php?u=www.coviid.me&t=COVI-ID'>
          <Facebook />
        </ExternalLink>
        <ExternalLink
          target='_blank'
          as='a'
          rel='noopener noreferrer'
          href='https://twitter.com/share?url=www.coviid.me&text=Join%20us%20in%20stopping%20the%20spread%20of%20Covid-19%20%0A%0A%0ARegister%20for%20your%20Covi-ID%20here%3A%20www.coviid.me'>
          <Twitter />
        </ExternalLink>
        <ExternalLink
          target='_blank'
          rel='noopener noreferrer'
          href='whatsapp://send?text=www.coviid.me" data-action="share/whatsapp/share"'>
          <Whatsapp />
        </ExternalLink>
      </SocialLinks>
    </SocialWrapper>
  )
}

export default SocialMediaLinks
