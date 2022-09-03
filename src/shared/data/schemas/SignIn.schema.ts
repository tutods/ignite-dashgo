import * as yup from "yup";

// Type of data on sign in form
type SignInFormData = {
  email: string;
  password: string;
};

// Yup schema to validate sign in form
const SignInFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please insert a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .min(6, "Password needs at least 6 characters.")
      .required("Password is required!"),
  })
  .required();

export { SignInFormSchema };
export type { SignInFormData };