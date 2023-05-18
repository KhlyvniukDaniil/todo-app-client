import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { MouseEvent, useState } from 'react'
import { useAuth } from 'utils/hooks'
import { ROUTES } from 'app/Routers/values'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'


const Header = () => {
	const { isAuth, logOut } = useAuth()
	const nav = useNavigate()
	const [ anchorElUser, setAnchorElUser ] = useState<null | HTMLElement>(null)

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = (route?: ROUTES) => () => {
		setAnchorElUser(null)
		route && nav(route)
	}

	const handleLogout = () => {
		logOut()
	}

	const handleRedirectMainPage = () => {
		nav(ROUTES.MAIN)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography onClick={ handleRedirectMainPage } sx={ { mr: 'auto', cursor: 'pointer', fontSize: 24 } }>
						{ 'TODO-APP' }
					</Typography>
					{ isAuth && (
						<Box sx={ { flexGrow: 0 } }>
							<Tooltip title="Open settings">
								<IconButton onClick={ handleOpenUserMenu } sx={ { p: 0 } }>
									<Avatar alt="avatar_icon" src="/static/images/avatar/2.jpg"/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={ { mt: '45px' } }
								id="menu-appbar"
								anchorEl={ anchorElUser }
								anchorOrigin={ {
									vertical: 'top',
									horizontal: 'right',
								} }
								keepMounted
								transformOrigin={ {
									vertical: 'top',
									horizontal: 'right',
								} }
								open={ Boolean(anchorElUser) }
								onClose={ handleCloseUserMenu() }
							>
								<MenuItem onClick={ handleCloseUserMenu(ROUTES.PROFILE) }>
									<Typography textAlign="center">Profile</Typography>
								</MenuItem>
								<MenuItem onClick={ handleCloseUserMenu(ROUTES.MAIN) }>
									<Typography textAlign="center">Dashboard</Typography>
								</MenuItem>
								<MenuItem onClick={ handleCloseUserMenu() }>
									<Typography onClick={ handleLogout } textAlign="center">Logout</Typography>
								</MenuItem>
							</Menu>
						</Box>
					) }
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
