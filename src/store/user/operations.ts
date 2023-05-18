import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	deleteUser as deleteUserApi,
	fetchUser as fetchUserApi,
	loginUser as loginUserApi,
	registerNewUser
} from 'utils/api/user/userApi'


const fetchUser = createAsyncThunk(
	'fetchUser',
	async () => fetchUserApi()
)

const registerUser = createAsyncThunk(
	'registerUser',
	async (data: Omit<User, 'id'>) => registerNewUser(data)
)

const loginUser = createAsyncThunk(
	'loginUser',
	async (data: LoginDataPayload) => loginUserApi(data)
)

const deleteUser = createAsyncThunk(
	'deleteUser',
	async (pass: string) => deleteUserApi(pass)
)

export default {
	fetchUser,
	registerUser,
	loginUser,
	deleteUser
}
