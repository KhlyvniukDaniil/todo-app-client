import * as Yup from 'yup'
import { regExp } from 'utils'


const signUplValidation = Yup.object({
	firstName: Yup.string()
		.min(3, 'Name must be at least 3 characters')
		.max(24, 'Name must be at most 24 characters')
		.required('Name is required'),
	lastName: Yup.string()
		.min(3, 'Last name must be at least 3 characters')
		.max(24, 'Last name must be at most 24 characters')
		.required('Last name is required'),
	telephone: Yup.string()
		.matches(regExp.phoneNumber, 'Phone number is not valid')
		.required('Phone number is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([ Yup.ref('password'), undefined ], 'Passwords must match')
		.required('Confirm password is required'),
})

const signInlValidation = Yup.object({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: Yup.string()
		.required('Password is required'),
})

const addTodoValidation = Yup.object({
	title: Yup.string()
		.required('Title is required'),
	description: Yup.string()
})

export default {
	signUp: signUplValidation,
	signIn: signInlValidation,
	addTodo: addTodoValidation
}
