import React from 'react'
import { Formik } from 'formik'
import { Form, FormContainer } from '../details-form/styles'
import ImageSubmit from '../image-submit/index.js'
import {
  SubmitButton,
  Center,
} from '../../components/form-styling/form button/styles.js'
import { Field, Input, Label } from '../form-input-style/styles.js'
import { Error } from '../../components/form-styling/error-message/styles'
import validationSchema from './validation-schema'
import api from '../../../api/index.js'
import history from '../../../utils/history.js'

const FormikRegister = () => {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          IDNumber: '',
          mobileNumber: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          api.auth.createUser(values).then(history.pushState('/step-2'))
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
                value={values.name}
              />
              <Error>{errors.name}</Error>
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
              <label htmlFor='IDNumber'></label>
              <Input
                id='IDNumber'
                name='IDNumber'
                type='number'
                placeholder='Enter ID Number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.IDNumber}
              />
              <Error>{errors.IDNumber}</Error>
            </Field>

            <Field>
              <Label>ID Number</Label>
              <label htmlFor='mobileNumber'></label>
              <Input
                id='mobileNumber'
                name='mobileNumber'
                type='number'
                placeholder='Enter Mobile Number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobileNumber}
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
      <ImageSubmit />
    </FormContainer>
  )
}

export default FormikRegister
