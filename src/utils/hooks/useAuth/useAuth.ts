import { userActions, userOperations, userSelectors } from 'store/user'
import { useAppDispatch, useAppSelector } from 'utils/hooks'


const UseAuth = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(userSelectors.getData())

	const isAuth = !!user
	const isTokenExists = !!localStorage.getItem('token')
	const token = localStorage.getItem('token')

	const register = (userDataPayload: Omit<User, 'id'>) => {
		dispatch(userOperations.registerUser(userDataPayload))
	}

	const login = (values: { email: string, password: string }) => {
		dispatch(userOperations.loginUser(values))
	}

	const autoLogin = () => {
		if (!isAuth && !!token) {
			dispatch(userOperations.fetchUser())
		}
	}

	const logOut = () => {
		dispatch(userActions.logOut())
	}

	return {
		isAuth,
		isTokenExists,
		token,
		register,
		login,
		logOut,
		autoLogin
	}
}

export default UseAuth
