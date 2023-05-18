import { useFormik } from 'formik'
import { ValidationSchemas } from 'utils'
import { initialValues } from 'components/SignInForm/values'
import { TextField } from 'components'
import { useAuth } from 'utils/hooks'
import { memo } from 'react'
import { Button } from '@mui/material'

// eslint-disable-next-line react-refresh/only-export-components
const SignInForm = () => {
	const { login } = useAuth()

	const formik = useFormik({
		initialValues,
		validationSchema: ValidationSchemas.signIn,
		onSubmit: login
	})

	return (
		<form noValidate onSubmit={ formik.handleSubmit }>
			<TextField form={ formik } name={ 'email' } id={ 'email' } placeholder={ 'Email Address' }/>
			<TextField
				form={ formik }
				type={ 'password' }
				name={ 'password' }
				id={ 'password' }
				placeholder={ 'Set Password' }
			/>
			<Button sx={ { mt: 4, width: '100%', fontSize: 14 } } variant={ 'outlined' } type={ 'submit' }>Continue</Button>
		</form>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SignInForm)
