interface Todo {
	id: number
	title: string
	description?: string
	isDone: boolean
}

interface TodoState {
	error: any
	data: Todo[]
	isLoading: boolean,
	limit: number,
	page: number,
	limitReached?: boolean
}
