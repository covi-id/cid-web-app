import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { object, bool, date } from 'yup'

import { Form, Footer, BodyContainer, TestDateSection } from './styles'
import TextInput from 'components/textInput'
import Button from 'components/button'
import walletFormContainer from 'stateContainers/walletFormContainer'
import RadioButton from 'components/radioButton'
import Select from 'components/select'
import api from 'api'
import { useHistory } from 'react-router-dom'

const INITIAL_VALUES = {
  tested: false,
  testDate: '',
  covidStatus: false,
  testLab: '',
  receivedResult: false,
}

const VALIDATION_SCHEMA = object().shape({
  tested: bool().required(),
  testDate: date(),
  testStatus: bool(),
})

const AddStatus = () => {
  const history = useHistory()

  const addDataToState = useCallback(
    async (values) => {
      await walletFormContainer.set({ covidTest: { ...values } })
      const { name, surname, id, telNumber, picture, covidTest } = {
        ...walletFormContainer.state,
      }
      await api.wallet
        .createWallet({
          name,
          surname,
          id,
          telNumber,
          picture: picture.split(',')[1],
          covidTest: {
            testDate: covidTest.testDate || new Date(),
            expiryDate: covidTest.testDate || new Date(),
            covidStatus: covidTest.covidStatus,
          },
        })
        .then(async (response) => {
          await walletFormContainer.set({
            ...response.data,
          })
          history.push('/create-wallet/issue')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    [history]
  )

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={addDataToState}>
      {({ handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <BodyContainer>
            <RadioButton
              name='tested'
              options={[
                { label: 'Yes', value: true },
                { label: 'No', value: false },
              ]}
              label='Have you done a CoviID test?'
            />
            {values.tested && (
              <>
                <TestDateSection>
                  <TextInput
                    name='testDate'
                    type='date'
                    placeholder='Enter date'
                    label='Test date'
                  />
                  <Select
                    label='Laboratory'
                    placeholder='Please select'
                    name='testLab'
                    displayProp='label'
                    valueProp='value'
                    items={[
                      { label: 'Pathcare', value: 'lab_1' },
                      { label: 'Lancet Laboratories', value: 'lab_2' },
                      { label: 'NHLS', value: 'lab_3' },
                      { label: "I don't know", value: 'lab_4' },
                    ]}
                  />
                </TestDateSection>
                <RadioButton
                  name='receivedResult'
                  options={[
                    { label: 'Yes', value: true },
                    { label: 'No', value: false },
                  ]}
                  label='Have you received your results yet?'
                />
                {values.receivedResult && (
                  <Select
                    label='Test status'
                    placeholder='Please select'
                    name='covidStatus'
                    displayProp='label'
                    valueProp='value'
                    items={[
                      { label: 'Positive', value: true },
                      { label: 'Negative', value: false },
                    ]}
                  />
                )}
              </>
            )}
          </BodyContainer>

          <Footer>
            <Button type='submit' onClick={handleSubmit}>
              Generate QR
            </Button>
          </Footer>
        </Form>
      )}
    </Formik>
  )
}

export default AddStatus
