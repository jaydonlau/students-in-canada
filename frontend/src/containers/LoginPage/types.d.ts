export type FormValues = {
  email: string;
  password: string;
}

export type OtherProps = {
  showPassword: boolean;
}

export type LoginFormProps = FormValues & OtherProps