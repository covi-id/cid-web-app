import {object, string} from 'yup'

import * as Yup from 'yup'

const containsSpecialCharacters = value => {
  return /[$!%*#?&]/gm.test(value)
}

const validationSchema = object().shape({
  name: string('Required')
    .required('Required')
    .test(
      'Special characters',
      'Must not contain special characters',
      value => !containsSpecialCharacters(value)
    ),
  email: string('Required')
    .email('Invalid email address')
    .required('Required')
    .test(
      'Special characters',
      'Must not contain special characters',
      value => !containsSpecialCharacters(value)
    ),
  password: string()
    .label('Password')
    .required('Required')
    .matches(/[a-z]{1,}/, 'Requires lowercase character')
    .matches(/[@$!%*#?&.,]{1,}/, 'Requires special character')
    .matches(/[A-Z]{1,}/, 'Requires uppercase character')
    .matches(/[0-9]{1,}/, 'Requires number')
    .min(6, 'Must be at least 6 characters')
    .max(32, 'Must be 32 characters or less'),

  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords do not match'
  ),
})
export default validationSchema
