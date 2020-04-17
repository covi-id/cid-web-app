import React from 'react'
import { Formik } from 'formik'
import { Form, FormContainer } from './styles'
import ImageSubmit from '../image-submit/index.js'
import { Field, Input, Label } from '../form-input-style/styles.js'
import { Error } from '../form-styling/error-message/styles'
import validationSchema from 'components/details-form/validation-schema'
import { useHistory } from 'react-router-dom'
import { SubmitButton, Center } from 'components/form-button/styles'
import Checkbox from 'components/checkbox'

const FormikRegister = () => {
  let history = useHistory()
  return (
    <FormContainer>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          idNumber: '',
          mobileNumber: '',
          consent: false,
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
          history.push({
            pathname: 'issue-credential',
            state: { form1: { ...values } },
          })
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>First Name</Label>
              <label htmlFor='firstName'></label>
              <Input
                id='firstName'
                name='firstName'
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                value={values.firstName}
              />
              <Error>{errors.firstName}</Error>
            </Field>

            <Field>
              <Label>Last Name</Label>
              <label htmlFor='lastName'></label>
              <Input
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                value={values.lastName}
              />
              <Error>{errors.lastName}</Error>
            </Field>

            <Field>
              <Label>ID Number</Label>
              <label htmlFor='idNumber'></label>
              <Input
                id='idNumber'
                name='idNumber'
                type='text'
                placeholder='Enter ID Number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.idNumber}
              />
              <Error>{errors.idNumber}</Error>
            </Field>

            <Field>
              <Label>Mobile Number</Label>
              <label htmlFor='mobileNumber'></label>
              <Input
                id='mobileNumber'
                name='mobileNumber'
                type='text'
                placeholder='Enter Mobile Number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobileNumber}
              />
              <Error>{errors.mobileNumber}</Error>
            </Field>

            <Field>
              <Checkbox
                id='consent'
                name='consent'
                handleChange={handleChange}
                checked={values.consent}
                labelInlineInd={true}
                label={
                  <>
                    By proceeding, I consent to the{' '}
                    <a
                      href='https://docs.google.com/document/d/19u3WE-w5VfNNyxQrYmZxsRRHH-WY0VBfE1eMmxRf9rQ/edit?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {' '}
                      privacy policy
                    </a>
                  </>
                }
              />
              <Error>{errors.consent}</Error>
            </Field>

            <Center>
              <SubmitButton onClick={handleSubmit} type='submit'>
                Next
              </SubmitButton>
            </Center>
          </Form>
        )}
      </Formik>
      <ImageSubmit />
    </FormContainer>
  )
}

export default FormikRegister
