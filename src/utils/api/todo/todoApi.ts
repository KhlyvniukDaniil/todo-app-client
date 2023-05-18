import axios, { AxiosResponse } from 'axios'


const URL = `${ import.meta.env.VITE_APP_API_URL }/todo`
const config = () => ({
	headers: {
		'Authorization': `Bearer ${ localStorage.getItem('token') }`
	}
})

export const fetchTodo = async ({ limit, page }: Pagination): Promise<AxiosResponse<Todo[]>> => (
	await axios.get<Todo[]>(`${ URL }/?page=${ page || 1 }&limit=${ limit || 24 }`, config())
)

export const addTodo = async (todoData: TodoPayload): Promise<AxiosResponse<Todo>> => (
	await axios.post<Todo>(URL, todoData, config())
)

export const editTodo = async (todoData: Todo): Promise<AxiosResponse<Todo>> => (
	await axios.put<Todo>(`${ URL }/${ todoData.id }`, todoData, config())
)

export const deleteTodo = async (todoId: number): Promise<AxiosResponse<Todo>> => (
	await axios.delete<Todo>(`${ URL }/${ todoId }`, config())
)
