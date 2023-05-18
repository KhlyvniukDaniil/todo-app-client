import { Card, CardActionArea, CardContent, Checkbox, Typography } from '@mui/material'
import { useAppDispatch } from 'utils/hooks'
import { todoOperations } from 'store/todo'


const TodoCard = ({ todo }: { todo: Todo }) => {
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(todoOperations.editTodo({
			id: todo.id,
			title: todo.title,
			description: todo.description,
			isDone: !todo.isDone
		}))
	}

	const handleDelete = () => {
		dispatch(todoOperations.deleteTodo(todo.id))
	}

	return (
		<Card sx={ { opacity: todo.isDone ? 0.6 : 1 } }>
			<CardActionArea onClick={ handleClick }>
				<Checkbox checked={ todo.isDone }></Checkbox>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">{ todo.title }</Typography>
					<Typography variant="body2" color="text.secondary">{ todo.description }</Typography>
				</CardContent>
			</CardActionArea>
			<Typography
				sx={ { mt: 2, textTransform: 'underline', cursor: 'pointer', fontSize: 14, ml: 1, mb: 1 } }
				onClick={ handleDelete }
			>
				DELETE
			</Typography>
		</Card>
	)
}

export default TodoCard
