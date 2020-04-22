import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { object, string, bool } from 'yup'

import { Form, Left, Right, Footer, BodyContainer } from './styles'
import TextInput from 'components/textInput'
import FileUpload from 'components/fileUpload'
import Button from 'components/button'
import walletFormContainer from 'stateContainers/walletFormContainer'
import { useHistory } from 'react-router-dom'
import Checkbox from 'components/checkbox'

const INITIAL_VALUES = {
  name: '',
  surname: '',
  id: '',
  telNumber: '',
  consent: false,
  picture: '',
}

const VALIDATION_SCHEMA = object().shape({
  name: string().label('First Name').required('*Required'),

  surname: string().label('Last Name').required('*Required'),

  telNumber: string()
    .label('Mobile Number')
    .min(10, 'Invalid SA number')
    .max(10, 'Invalid SA number')
    .required('*Required'),

  id: string()
    .label('ID Number')
    .min(13, 'Must be 13 characters')
    .max(13, 'Must be 13 characters')
    .required('*Required'),

  picture: string('*Required').test('picture', '*Required', (value) =>
    /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
      value
    )
  ),
  consent: bool()
    .label('Consent')
    .required('*Required')

    .test(
      'Test for true',
      'You must agree to the privacy policy before proceeding',
      (value) => value === true
    ),
})

const CreateWallet = () => {
  const history = useHistory()
  const addDataToState = useCallback(
    (values) => {
      walletFormContainer.set(values)
      history.push('/create-wallet/status')
    },
    [history]
  )
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={addDataToState}>
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <BodyContainer>
            <Left>
              <TextInput placeholder='Enter name' name='name' label='Name' />
              <TextInput
                name='surname'
                placeholder='Enter surname'
                label='Surname'
              />
              <TextInput
                name='id'
                placeholder='Enter ID number'
                label='ID Number'
              />
              <TextInput
                name='telNumber'
                placeholder='Enter mobile number'
                label='Mobile Number'
              />
            </Left>

            <Right>
              <FileUpload
                name='picture'
                label='Upload picture'
                dropText='Drop files :)'
                placeholder='Drag and drop or click to add file here.'
              />
            </Right>
          </BodyContainer>

          <Footer>
            <Checkbox
              name='consent'
              onChange={handleChange}
              labelInlineInd={true}
              checked={!!values?.consent}
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

            <Button type='submit' onClick={handleSubmit}>
              Next
            </Button>
          </Footer>
        </Form>
      )}
    </Formik>
  )
}

export default CreateWallet
