import axios, { AxiosResponse } from 'axios'


const config = () => ({
	headers: {
		'Authorization': `Bearer ${ localStorage.getItem('token') }`
	}
})

export const fetchUser = async (): Promise<AxiosResponse<UserResponseData>> => (
	await axios.get<UserResponseData>(`${ import.meta.env.VITE_APP_API_URL }/user`, config())
)

export const registerNewUser = async (userData: Omit<User, 'id'>): Promise<AxiosResponse<UserResponseData>> => (
	await axios.post<UserResponseData>(`${ import.meta.env.VITE_APP_API_URL }/auth/sign-up`, userData)
)

export const deleteUser = async (pass: string): Promise<AxiosResponse> => (
	await axios.delete(`${ import.meta.env.VITE_APP_API_URL }/user/${ pass }`, config())
)

export const loginUser = async (userData: LoginDataPayload): Promise<AxiosResponse<UserResponseData>> => (
	await axios.post<UserResponseData>(`${ import.meta.env.VITE_APP_API_URL }/auth/login`, userData)
)
