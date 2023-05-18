import { PageLayout, TodoCard, TodoForm } from 'components'
import { Box, Button, Container, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector, useToggle } from 'utils/hooks'
import { todoOperations, todoSelectors } from 'store/todo'
import { useMemo } from 'react'


const Main = () => {
	const dispatch = useAppDispatch()
	const todos = useAppSelector(todoSelectors.getTodoList())
	const isLimitReached = useAppSelector(todoSelectors.getIsLimitReached())
	const [ isTodoFormOpen, toggleAddIsTodoFormOpen ] = useToggle()
	const limit = useAppSelector(todoSelectors.getLimit())
	const page = useAppSelector(todoSelectors.getPage())

	const todoList = useMemo(() => todos.map(todo => (
		<TodoCard key={ todo.id } todo={ todo }/>
	)), [ todos ])

	const handleLoadMore = () => {
		console.log(page)
		dispatch(todoOperations.loadMoreTodo({ page, limit }))
	}

	return (
		<PageLayout>
			<Container>
				<Box>
					<Typography
						onClick={ toggleAddIsTodoFormOpen }
						sx={ { fontSize: 14, mt: 4, cursor: 'pointer', textDecoration: 'underline' } }
					>
						{ 'Add todo' }
					</Typography>
					{ isTodoFormOpen && <TodoForm onClose={ toggleAddIsTodoFormOpen }/> }
				</Box>
				<Box sx={ { mt: 8, gap: 2, display: 'flex', flexDirection: 'column' } }>
					{ todoList }
				</Box>
				{/*<Button sx={ { mt: 8 } } variant={ 'outlined' } onClick={ handleLoadMore }>load more</Button>*/ }
				{ !isLimitReached && (
					<Button sx={ { mt: 8 } } variant={ 'outlined' } onClick={ handleLoadMore }>load more</Button>
				) }
			</Container>
		</PageLayout>
	)
}

export default Main
