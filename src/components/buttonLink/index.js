import React from "react";
import { string } from "prop-types";
import { Container, Icon, Text, InternalLinkContainer } from "./styles";

const ButtonLink = ({
  icon = null,
  children,
  to,
  href,
  target,
  rel,
  style,
  variant,
  disabled,
}) => {
  if (to) {
    return (
      <InternalLinkContainer
        disabled={disabled}
        variant={variant}
        style={style}
        to={to}
      >
        <Text>{children}</Text>
        {icon && <Icon src={icon} alt={`${children} icon`} />}
      </InternalLinkContainer>
    );
  }

  return (
    <Container
      variant={variant}
      target={target}
      href={href}
      rel={rel}
      style={style}
      disabled={disabled}
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
  rel: string,
};

ButtonLink.defaultProps = {
  to: null,
  href: "",
  target: "",
  rel: "",
};

export default ButtonLink;
