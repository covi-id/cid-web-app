import React from 'react'
import { Formik } from 'formik'
import { Form, FormContainer, Field, Input, Label, TopInputs } from './styles'
import { Error } from '../form-styling/error-message/styles'
import { Center, SubmitButton } from 'components/form-button/styles'
import api from 'api'
import { useHistory } from 'react-router-dom'

const submit = async (body) => {
  await api.auth
    .register({ ...body })
    .then(() => {
      console.log('success')
    })
    .catch((err) => {
      console.log(err)
    })
}

const FormikTest = ({ ...props }) => {
  const history = useHistory()
  return (
    <FormContainer>
      <Formik
        initialValues={{
          testDate: '',
          covidStatus: '',
          expiryDate: '',
        }}
        onSubmit={(values) => {
          try {
            const formikDetails = { ...props.formValues }
            const obj = {
              name: formikDetails.firstName,
              surname: formikDetails.lastName,
              id: formikDetails.idNumber,
              telNumber: formikDetails.mobileNumber,
              picture: '',
              covidTest: {
                ...values,
                covidStatus: 0,
              },
              walletParameters: {
                ownerName: '',
              },
            }
            submit(obj)
            history.push('/issue-qr-code')
          } catch (err) {
            console.log(err)
          }
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <TopInputs>
              {' '}
              <Field>
                <Label>Test Date</Label>
                <label htmlFor='testDate'></label>
                <Input
                  id='testDate'
                  name='testDate'
                  type='date'
                  placeholder='Enter test date'
                  onChange={handleChange}
                  value={values.name}
                />
                <Error>{errors.name}</Error>
              </Field>
              <Field>
                <Label>Test Status</Label>
                <label htmlFor='covidStatus'></label>
                <Input
                  id='covidStatus'
                  name='covidStatus'
                  type='text'
                  placeholder='Enter test status'
                  onChange={handleChange}
                  value={values.lastName}
                />
                <Error>{errors.lastName}</Error>
              </Field>
            </TopInputs>
            <Field>
              <Label>Expiry Date</Label>
              <label htmlFor='expiryDate'></label>
              <Input
                id='expiryDate'
                name='expiryDate'
                type='date'
                placeholder='Enter expiry date'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.IDNumber}
              />
              <Error>{errors.IDNumber}</Error>
            </Field>
            <Center>
              <SubmitButton onClick={handleSubmit} type='submit'>
                Next
              </SubmitButton>
            </Center>
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

export default FormikTest
