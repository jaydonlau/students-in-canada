import React from 'react'
import { FormikProps, withFormik } from 'formik'
import * as yup from 'yup'

import {
	StyledForm,
	StyledField,
	StyledErrorMessage,
	EmailWrapper,
	PasswordWrapper
} from './LoginPage.styles'

import { FormValues, OtherProps, LoginFormProps } from './types.d'

const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
	const { showPassword, errors } = props
	console.log('errors=', errors)
	return (
		<StyledForm>
			<EmailWrapper>
				<label htmlFor="email">Email</label>
				<StyledField type="text" name="email"/>
				<StyledErrorMessage name="email" />
			</EmailWrapper>
			<PasswordWrapper>
				<label htmlFor="password">Password</label>
				<StyledField type={showPassword ? 'text' : 'password'} name="password"/>
				<StyledErrorMessage name="password" />
			</PasswordWrapper>
			<button type="submit">Submit</button>
		</StyledForm>
	)
}

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
})

export default withFormik<LoginFormProps, FormValues>({
	mapPropsToValues: props => ({
		showPassword: props.showPassword,
		email: props.email || '',
		password: props.password || '',
	}),
    // Handles our submission
    handleSubmit: (values, { setSubmitting }) => {
	    // This is where you could send the submitted values to the backend
	    console.log("Submitted Email:", values.email)
	    console.log("Submitted Password:", values.password)
	    // Simulates the delay of a real request
	    setTimeout(() => setSubmitting(false), 3 * 1000)
	},
	validateOnChange: false,
	validateOnBlur: false,
  validationSchema: LoginValidation,
})(LoginForm)
