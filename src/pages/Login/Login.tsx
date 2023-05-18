import { PageLayout, SignInForm, SignUpForm } from 'components'
import { useAuth, useToggle } from 'utils/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'app/Routers/values'
import { Box, Container, Typography } from '@mui/material'


const Login = () => {
	const { isAuth } = useAuth()
	const [ isSignUp, toggleIsSignUp ] = useToggle(isAuth)
	const nav = useNavigate()

	useEffect(() => {
		if (isAuth) nav(ROUTES.MAIN)
	}, [ isAuth, nav ])

	return (
		<PageLayout>
			<Container sx={ { mt: 14 } }>
				<Box sx={ { width: { xs: '100%', md: '450px', margin: '0 auto' } } }>
					< Typography
						onClick={ toggleIsSignUp }
						sx={ { mb: 8, textDecoration: 'underline', fontSize: 14, cursor: 'pointer' } }
					>
						{ isSignUp ? 'Already have an account? login' : 'Don\'t have an account? signUp' }
					</Typography>
					{ isSignUp ? <SignUpForm/> : <SignInForm/> }
				</Box>
			</Container>
		</PageLayout>
	)
}

export default Login
