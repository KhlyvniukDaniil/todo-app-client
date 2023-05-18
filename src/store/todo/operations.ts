import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	addTodo as addTodoApi,
	deleteTodo as deleteTodoApi,
	editTodo as editTodoApi,
	fetchTodo as fetchTodoApi
} from 'utils/api/todo/todoApi'


const fetchTodo = createAsyncThunk(
	'fetchTodo',
	async (pagination: Pagination) => fetchTodoApi(pagination)
)

const loadMoreTodo = createAsyncThunk(
	'loadMoreTodo',
	async (pagination: Pagination) => fetchTodoApi(pagination)
)

const addTodo = createAsyncThunk(
	'addTodo',
	async (data: TodoPayload) => addTodoApi(data)
)

const editTodo = createAsyncThunk(
	'loginTodo',
	async (data: Todo) => editTodoApi(data)
)

const deleteTodo = createAsyncThunk(
	'deleteTodo',
	async (id: number) => deleteTodoApi(id)
)

export default {
	fetchTodo,
	loadMoreTodo,
	addTodo,
	editTodo,
	deleteTodo
}
