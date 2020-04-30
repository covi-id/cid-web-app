import React from "react";
import { string } from "prop-types";
import { Container, Icon, Text, InternalLinkContainer } from "./styles";

const ButtonLink = ({ icon = null, children, to, href, target, rel }) => {

  if (to) {
    return (
      <InternalLinkContainer to={to}>
        <Text>{children}</Text>
        {icon && <Icon src={icon} alt={`${children} icon`} />}
      </InternalLinkContainer>
    );
  }

  return (
    <Container
      target={target}
      href={href}
      rel={rel}
    >
      <Text>{children}</Text>
      {icon && <Icon src={icon} alt={`${children} icon`} />}
    </Container>
  );
};

ButtonLink.propTypes = {
  to: string,
  href: string,
  icon: string,
  target: string,
  rel: string
};

ButtonLink.defaultProps = {
  to: null,
  href: "",
  target: "",
  rel: ""
};

export default ButtonLink;
