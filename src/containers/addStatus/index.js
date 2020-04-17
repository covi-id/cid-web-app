import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { object, bool, date } from 'yup'

import { Form, Footer, BodyContainer, TestDateSection } from './styles'
import TextInput from 'components/textInput'
import Button from 'components/button'
import walletFormContainer from 'stateContainers/walletFormContainer'
import RadioButton from 'components/radioButton'
import Select from 'components/select'

const INITIAL_VALUES = {
  tested: false,
  testDate: '',
  testStatus: false,
  testLab: '',
}

const VALIDATION_SCHEMA = object().shape({
  tested: bool().required(),
  testDate: date(),
  testStatus: bool(),
})

const AddStatus = () => {
  const addDataToState = useCallback((values) => {
    walletFormContainer.set(values)
    // history.push("/create-wallet/status");
  }, [])
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
                { label: 'Yes', value: true, checked: true },
                { label: 'No', value: false, checked: false },
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
                    abel='Laboratory'
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
                <Select
                  label='Test status'
                  placeholder='Please select'
                  name='testStatus'
                  displayProp='label'
                  valueProp='value'
                  items={[
                    { label: 'Positive', value: true },
                    { label: 'Negative', value: false },
                  ]}
                />
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
