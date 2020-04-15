import React from 'react'
import { Container, MainLogo, Header } from './styles.js'
import FormikRegister from '../../components/details-form/index.js'
import { Formik } from 'formik'

const ProofRequest = () => {
  return (
    <>
      <Header>
        <MainLogo />
      </Header>
      <Container>
        <FormikRegister />
      </Container>
    </>
  )
}
export default ProofRequest
