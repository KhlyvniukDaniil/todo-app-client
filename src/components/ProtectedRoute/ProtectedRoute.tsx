import { useAuth } from 'utils/hooks'
import { Navigate, RouteProps } from 'react-router-dom'
import { ROUTES } from 'app/Routers/values'
import { ReactNode } from 'react'


const ProtectedRoute = ({ children: Children, ...props }: { children: ReactNode, props?: RouteProps }) => {
	const { isAuth } = useAuth()
	return isAuth ? <>{ Children }</> : <Navigate { ...props } to={ ROUTES.LOGIN } replace/>
}

export default ProtectedRoute
