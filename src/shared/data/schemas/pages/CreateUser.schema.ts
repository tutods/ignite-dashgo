import * as yup from "yup";

// Type of data on sign in form
type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// Yup schema to validate sign in form
const CreateUserFormSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required!"),
    email: yup
      .string()
      .email("Please insert a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .min(6, "Password needs at least 6 characters.")
      .required("Password is required!"),
    confirmPassword: yup
      .string()
      .oneOf(
        [null, yup.ref("password")],
        "Password confirmation and password don't match"
      ),
  })
  .required();

export { CreateUserFormSchema };
export type { CreateUserFormData };