import React from 'react'

import AddStatus from 'containers/addStatus'
import { Container, HeadingContainer, StepHeading } from './styles.js'

const AddStatusPage = () => (
  <Container>
    <HeadingContainer>
      <StepHeading>New test result</StepHeading>
    </HeadingContainer>
    <AddStatus />
  </Container>
)

export default AddStatusPage
