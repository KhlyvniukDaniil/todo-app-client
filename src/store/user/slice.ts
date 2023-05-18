import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userOperations } from 'store/user'
import { AxiosResponse } from 'axios'


const initialState: UserState = {
	token: localStorage.getItem('token') || null,
	data: null,
	error: null,
	isLoading: false,
}

const setReduxStateHelper = (data: User | null, error: string | null, isLoading: boolean, token: string | null)
	: UserState => ({ data, error, isLoading, token })

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken(state, action) {
			state.token = action.payload.token
			localStorage.setItem('token', action.payload.token)
		},
		logOut(state) {
			localStorage.removeItem('token')
			state.token = null
			state.data = null
			state.error = null
			state.isLoading = false
		}
	},
	extraReducers: (builder) => builder
		.addCase(userOperations.fetchUser.fulfilled, (state: UserState, action: PayloadAction<AxiosResponse<UserResponseData>>) => {
			Object.assign(
				state,
				setReduxStateHelper(action.payload.data, null, false, localStorage.getItem('token'))
			)
		})
		.addCase(userOperations.fetchUser.pending, (state: UserState) => {
			Object.assign(state, setReduxStateHelper(null, null, true, null))
		})
		.addCase(userOperations.fetchUser.rejected, (state: UserState, action: any) => {
			Object.assign(state, setReduxStateHelper(null, action.error, false, null))
		})
		.addCase(userOperations.registerUser.fulfilled, (state: UserState, action: PayloadAction<AxiosResponse<UserResponseData>>) => {
			const { token, ...user } = action.payload.data
			Object.assign(state, setReduxStateHelper(user, null, false, token))
			localStorage.setItem('token', token)
		})
		.addCase(userOperations.registerUser.pending, (state: UserState) => {
			Object.assign(state, setReduxStateHelper(null, null, true, null))
		})
		.addCase(userOperations.registerUser.rejected, (state: UserState, action: any) => {
			Object.assign(state, setReduxStateHelper(null, action.error, false, null))
		})
		.addCase(userOperations.loginUser.fulfilled, (state: UserState, action: PayloadAction<AxiosResponse<UserResponseData>>) => {
			const { token, ...user } = action.payload.data
			Object.assign(state, setReduxStateHelper(user, null, false, token))
			localStorage.setItem('token', token)
		})
		.addCase(userOperations.loginUser.pending, (state: UserState) => {
			Object.assign(state, setReduxStateHelper(null, null, true, null))
		})
		.addCase(userOperations.loginUser.rejected, (state: UserState, action: any) => {
			Object.assign(state, setReduxStateHelper(null, action.error, false, null))
		})
		.addCase(userOperations.deleteUser.fulfilled, (state: UserState) => {
			Object.assign(state, setReduxStateHelper(null, null, false, null))
			localStorage.removeItem('token')
		})
		.addCase(userOperations.deleteUser.pending, (state: UserState) => {
			Object.assign(state, setReduxStateHelper(null, null, true, null))
		})
		.addCase(userOperations.deleteUser.rejected, (state: UserState, action: any) => {
			Object.assign(state, setReduxStateHelper(null, action.error, false, null))
		})
})

export const { actions } = userSlice
export default userSlice.reducer
