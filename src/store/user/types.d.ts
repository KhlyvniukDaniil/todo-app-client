interface User {
	id: number
	firstName: string
	lastName: string
	email: string
	telephone: string
}

interface UserState {
	error: string | null
	data: User | null
	isLoading: boolean
	token: string | null
}
