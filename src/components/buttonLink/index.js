import React from "react";
import { string } from "prop-types";
import { Container, Icon, Text } from "./styles";

const ButtonLink = ({ icon = null, children, to }) => (
  <Container to={to}>
    <Text>{children}</Text>
    {icon && <Icon src={icon} alt={`${children} icon`} />}
  </Container>
);

ButtonLink.propTypes = {
  to: string.isRequired,
  icon: string
};

export default ButtonLink;
