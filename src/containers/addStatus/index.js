import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { object, date, string } from 'yup'

import {
  Form,
  Footer,
  BodyContainer,
  TestDateSection,
  InputWrapper,
  MakeInline,
  ItemContainer,
} from './styles'
import TextInput from 'components/textInput'
import Button from 'components/button'
import walletFormContainer from 'stateContainers/walletFormContainer'
import RadioButton from 'components/radioButton'
import Select from 'components/select'
import FormHeader from 'components/formHeader'

const INITIAL_VALUES = {
  referenceNumber: '',
  dateTested: '',
  covidStatus: 'Negative',
  laboratory: '',
  receivedResult: false,
}

const VALIDATION_SCHEMA = object().shape({
  referenceNumber: string().max(30 | 'Max 30 characters.'),
  dateTested: date()
    .min(new Date(2020, 0, 1), 'Test date cannot be before 1st January, 2020.')
    .max(new Date(), 'Test date cannot be in the future.')
    .required('*Required'),
  covidStatus: string().required('*Required'),
  laboratory: string().required('*Required'),
})

const AddStatus = ({ twoStepCallback }) => {
  const addDataToState = useCallback(
    async (values) => {
      await walletFormContainer.set({ covidTest: { ...values } })
      const { covidTest } = {
        ...walletFormContainer.state,
      }
      twoStepCallback(covidTest)
    },
    [twoStepCallback]
  )

  return (
    <>
      <FormHeader heading='New test result' showBack={false} />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={addDataToState}>
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <BodyContainer>
              <>
                <TestDateSection>
                  <ItemContainer>
                    <TextInput
                      label='Test reference number'
                      placeholder='Enter reference number'
                      name='referenceNumber'
                    />
                  </ItemContainer>
                  <ItemContainer>
                    <Select
                      label='Laboratory'
                      placeholder='Please select'
                      name='laboratory'
                      displayProp='label'
                      valueProp='value'
                      items={[
                        {
                          label: 'NHLS (National Health Laboratory Service)',
                          value: 'NHLS',
                        },
                        {
                          label: 'Lancet Laboratories',
                          value: 'LancetLaboratories',
                        },
                        {
                          label: 'Pathcare',
                          value: 'Pathcare',
                        },
                        {
                          label: 'Other',
                          value: 'Other',
                        },
                      ]}
                    />
                  </ItemContainer>
                </TestDateSection>
                <InputWrapper>
                  <ItemContainer>
                    <TextInput
                      name='dateTested'
                      type='date'
                      placeholder='Enter date'
                      label='Test date'
                    />
                  </ItemContainer>
                </InputWrapper>
                <MakeInline>
                  <ItemContainer>
                    <RadioButton
                      name='receivedResult'
                      options={[
                        { label: 'Yes', value: true },
                        { label: 'No', value: false },
                      ]}
                      label='Did you get your results?'
                    />
                  </ItemContainer>
                  <ItemContainer>
                    {values.receivedResult && (
                      <Select
                        label='Test status'
                        placeholder='Please select'
                        name='covidStatus'
                        displayProp='label'
                        valueProp='value'
                        items={[
                          { label: 'Negative', value: 'Negative' },
                          { label: 'Positive', value: 'Positive' },
                        ]}
                      />
                    )}
                  </ItemContainer>
                </MakeInline>
              </>
            </BodyContainer>

            <Footer>
              <Button type='submit' onClick={handleSubmit}>
                Next
              </Button>
            </Footer>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AddStatus
