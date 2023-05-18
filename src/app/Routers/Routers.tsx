import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'app/Routers/values'
import { LoginPage, MainPage, ProfilePage } from 'pages'
import { ProtectedRoute } from 'components'


const Routers = () => {
	return (
		<Routes>
			<Route path={ ROUTES.LOGIN } element={ <LoginPage/> }/>
			<Route path={ ROUTES.MAIN } element={ <ProtectedRoute><MainPage/></ProtectedRoute> }/>
			<Route path={ ROUTES.PROFILE } element={ <ProtectedRoute><ProfilePage/></ProtectedRoute> }/>
		</Routes>
	)
}

export default Routers
