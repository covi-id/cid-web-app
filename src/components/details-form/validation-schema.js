import { object, string, bool } from 'yup'
import { containsSpecialCharacters } from 'utils/regex'

const validationSchema = object().shape({
  firstName: string()
    .label('First Name')
    .required('Required')
    .test(
      'Special characters',
      'Must not contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  lastName: string()
    .label('Last Name')
    .required('Required')
    .test(
      'Special characters',
      'Must not contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  mobileNumber: string()
    .label('Mobile Number')
    .required('Required')
    .min(10, 'Please enter a valid South African mobile number')
    .max(10, 'Please enter a valid South African mobile number')
    .test(
      'Special characters',
      'Cannot contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  idNumber: string('Required')
    .label('ID Number')
    .required('Required')
    .min(13, 'Must be 13 characters')
    .max(13, 'Must be 13 characters')
    .test(
      'Special characters',
      'Cannot not contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  consent: bool('Required')
    .label('Consent')
    .required()
    .test(
      'Test for true',
      'You must agree to the privacy policy before proceeding',
      (value) => value === true
    ),
})
export default validationSchema
