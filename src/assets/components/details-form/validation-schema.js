import { object, string } from 'yup'

const containsSpecialCharacters = (value) => {
  return /[$!%*#?&]/gm.test(value)
}

const validationSchema = object().shape({
  lastName: string()
    .label('lastName')
    .required('Required')
    .test(
      'Special characters',
      'Must not contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  lastName: string()
    .label('lastName')
    .required('Required')
    .test(
      'Special characters',
      'Must not contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  mobileNumber: string()
    .label('mobileNumber')
    .required('Required')
    .min(10, 'Please enter a valid South African mobile number')
    .max(10, 'Please enter a valid South African mobile number')
    .test(
      'Special characters',
      'Cannot contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),

  IDNumber: string('Required')
    .label('IDNumber')
    .required('Required')
    .min(13, 'Must be 13 characters')
    .max(13, 'Must be 13 characters')
    .test(
      'Special characters',
      'Cannot not contain special characters',
      (value) => !containsSpecialCharacters(value)
    ),
})
export default validationSchema
