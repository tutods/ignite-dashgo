import * as yup from "yup";

type SignInFromData = {
  email: string;
  password: string;
};

const SignInSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please insert a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .min(4, "Password needs at least 4 characters.")
      .required("Password is required!"),
  })
  .required();

export { SignInSchema };
export type { SignInFromData };