interface LoginDataPayload {
	email: string
	password: string
}

interface UserResponseData extends User {
	token: string
}

type UserResponse = UserResponseData
