import { object, string } from "yup";
import containsSpecialCharacters from "components/details-form/validationSchema";

const validationSchema = object().shape({
  firstName: string()
    .label("First Name")
    .required("Required"),

  lastName: string()
    .label("Last Name")
    .required("Required"),

  mobileNumber: string()
    .label("Mobile Number")
    .min(10, "Please enter a valid South African mobile number")
    .max(10, "Please enter a valid South African mobile number")
    .required("Required"),

  idNumber: string()
    .label("ID Number")
    .min(13, "Must be 13 characters")
    .max(13, "Must be 13 characters")
    .required("Required")
});
export default validationSchema;
