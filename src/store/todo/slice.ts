import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { todoOperations } from 'store/todo'


const initialState: TodoState = {
	data: [],
	error: null,
	isLoading: false,
	limit: 14,
	page: 1,
	limitReached: false
}

const setReduxStateHelper = (data: Todo[], error: string | null, isLoading: boolean)
	: Omit<Omit<TodoState, 'limit'>, 'page'> => ({ data, error, isLoading })

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: (builder) => builder
		.addCase(todoOperations.fetchTodo.fulfilled, (state: TodoState, action: PayloadAction<AxiosResponse<Todo[]>>) => {
			state.page += 1
			state.limitReached = action.payload.data.length < state.limit
			Object.assign(state, setReduxStateHelper(action.payload.data, null, false))
		})
		.addCase(todoOperations.fetchTodo.pending, (state: TodoState) => {
			Object.assign(state, setReduxStateHelper([], null, true))
		})
		.addCase(todoOperations.fetchTodo.rejected, (state: TodoState, action: any) => {
			Object.assign(state, setReduxStateHelper([], action.error, false))
		})
		.addCase(todoOperations.loadMoreTodo.fulfilled, (state: TodoState, action: PayloadAction<AxiosResponse<Todo[]>>) => {
			state.data = [
				...state.data,
				...action.payload.data
			]
			state.limitReached = action.payload.data.length < state.limit
			state.page += 1
			state.isLoading = false
			state.error = null
		})
		.addCase(todoOperations.loadMoreTodo.pending, (state: TodoState) => {
			state.isLoading = false
			state.error = null
		})
		.addCase(todoOperations.loadMoreTodo.rejected, (state: TodoState, action: any) => {
			state.isLoading = false
			state.error = action.error
		})
		.addCase(todoOperations.addTodo.fulfilled, (state: TodoState, action: PayloadAction<AxiosResponse<Todo>>) => {
			state.data.push(action.payload.data)
			state.isLoading = false
			state.error = null
		})
		.addCase(todoOperations.addTodo.pending, (state: TodoState) => {
			state.isLoading = true
			state.error = null
		})
		.addCase(todoOperations.addTodo.rejected, (state: TodoState, action: any) => {
			state.isLoading = false
			state.error = action.error
		})
		.addCase(todoOperations.editTodo.fulfilled, (state: TodoState, action: PayloadAction<AxiosResponse<Todo>>) => {
			const currId = action.payload.data.id
			state.data = state.data.map(todo => todo.id === currId ? action.payload.data : todo)
			state.isLoading = false
			state.error = null
		})
		.addCase(todoOperations.editTodo.pending, (state: TodoState) => {
			state.isLoading = true
			state.error = null
		})
		.addCase(todoOperations.editTodo.rejected, (state: TodoState, action: any) => {
			state.isLoading = false
			state.error = action.error
		})
		.addCase(todoOperations.deleteTodo.fulfilled, (state: TodoState, action: PayloadAction<AxiosResponse<Todo>>) => {
			state.data = state.data.filter(todo => todo.id !== action.payload.data.id)
			state.isLoading = false
			state.error = null
		})
		.addCase(todoOperations.deleteTodo.pending, (state: TodoState) => {
			state.isLoading = true
			state.error = null
		})
		.addCase(todoOperations.deleteTodo.rejected, (state: TodoState, action: any) => {
			state.isLoading = false
			state.error = action.error
		})
})

export const { actions } = todoSlice
export default todoSlice.reducer
