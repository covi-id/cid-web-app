import React from 'react'
import { string } from 'prop-types'
import { Container, Icon, Text } from './styles'
import { useHistory } from 'react-router-dom'

const ButtonLink = ({ icon = null, children, to, href, target, rel }) => {
  const history = useHistory()
  return (
    <Container
      target={target}
      href={href}
      rel={rel}
      onClick={() => to && history.push(to)}>
      <Text>{children}</Text>
      {icon && <Icon src={icon} alt={`${children} icon`} />}
    </Container>
  )
}

ButtonLink.propTypes = {
  to: string,
  href: string,
  icon: string,
  target: string,
  rel: string,
}

ButtonLink.defaultProps = {
  to: null,
  href: '',
  target: '',
  rel: '',
}

export default ButtonLink
