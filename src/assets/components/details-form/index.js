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
          name: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          api.auth.createUser(values).then(history.pushState('/step-2'))
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>Name</Label>
              <label htmlFor='name'></label>
              <Input
                id='name'
                name='name'
                type='string'
                placeholder=' Your Name'
                onChange={handleChange}
                value={values.name}
              />
              <Error>{errors.name}</Error>
            </Field>

            <Field>
              <Label>Email</Label>
              <label htmlFor='email'></label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='example@findingx.com'
                onChange={handleChange}
                value={values.email}
              />
              <Error>{errors.email}</Error>
            </Field>

            <Field>
              <Label>Password</Label>
              <label htmlFor='password'></label>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='Enter password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Error>{errors.password}</Error>
            </Field>

            <Field>
              <Label>Confirm password</Label>
              <label htmlFor='passwordConfirmation'></label>
              <Input
                id='passwordConfirmation'
                name='passwordConfirmation'
                type='password'
                placeholder='Confirm password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
              />
              <Error>{errors.passwordConfirmation}</Error>
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
