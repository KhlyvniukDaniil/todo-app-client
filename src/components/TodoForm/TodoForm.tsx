import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { TextField } from 'components'
import { ValidationSchemas } from 'utils'
import { useAppDispatch } from 'utils/hooks'
import { todoOperations } from 'store/todo'

const defaultValues = {
	title: '',
	description: ''
}
const TodoForm = ({ initialValues = defaultValues, onClose }: any) => {
	const dispatch = useAppDispatch()
	const handleAddTodo = (todoData: TodoPayload) => {
		dispatch(todoOperations.addTodo(todoData))
	}
	// const handleEditTodo = (todoData: TodoPayload) => {
	//
	// }

	const handleSubmit = (todoData: TodoPayload) => {
		handleAddTodo(todoData)
		onClose()
	}

	const formik = useFormik({
		initialValues,
		validationSchema: ValidationSchemas.addTodo,
		onSubmit: handleSubmit
	})

	return (
		<form noValidate onSubmit={ formik.handleSubmit }>
			<TextField form={ formik } name={ 'title' } id={ 'title' } placeholder={ 'Title' }/>
			<TextField form={ formik } name={ 'description' } id={ 'description' } placeholder={ 'description' }/>
			<Button sx={ { mt: 4, width: '100%', fontSize: 14 } } variant={ 'outlined' } type={ 'submit' }>Save</Button>
		</form>
	)
}

export default TodoForm
