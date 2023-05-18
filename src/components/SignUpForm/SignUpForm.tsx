import { useFormik } from 'formik'
import { ValidationSchemas } from 'utils'
import { initialValues } from 'components/SignUpForm/values'
import { TextField } from 'components'
import { memo } from 'react'
import { useAuth } from 'utils/hooks'
import { Button } from '@mui/material'

// eslint-disable-next-line react-refresh/only-export-components
const SignUpForm = () => {
	const { register } = useAuth()

	const formik = useFormik({
		initialValues,
		validationSchema: ValidationSchemas.signUp,
		onSubmit: register
	})

	return (
		<form noValidate onSubmit={ formik.handleSubmit }>
			<TextField form={ formik } name={ 'firstName' } id={ 'firstName' } placeholder={ 'First Name' }/>
			<TextField form={ formik } name={ 'lastName' } id={ 'lastName' } placeholder={ 'Last Name' }/>
			<TextField form={ formik } name={ 'email' } id={ 'email' } placeholder={ 'Email Address' }/>
			<TextField form={ formik } name={ 'telephone' } id={ 'telephone' } placeholder={ 'Telephone' }/>
			<TextField
				form={ formik }
				type={ 'password' }
				name={ 'password' }
				id={ 'password' }
				placeholder={ 'Set Password' }
			/>
			<TextField
				form={ formik }
				type={ 'password' }
				name={ 'confirmPassword' }
				id={ 'confirmPassword' }
				placeholder={ 'Confirm Password' }
			/>
			<Button sx={ { mt: 4, width: '100%', fontSize: 14 } } variant={ 'outlined' } type={ 'submit' }>Continue</Button>
		</form>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SignUpForm)
