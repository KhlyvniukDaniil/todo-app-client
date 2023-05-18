import { PageLayout } from 'components'
import { useAppDispatch, useAppSelector, useToggle } from 'utils/hooks'
import { userOperations, userSelectors } from 'store/user'
import {
	Box,
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContentText,
	DialogTitle,
	TextField,
	Typography
} from '@mui/material'
import { useState } from 'react'


const Profile = () => {
	const user = useAppSelector(userSelectors.getData())
	const [ open, toggleOpen ] = useToggle(false)
	const dispatch = useAppDispatch()
	const [ value, setValue ] = useState<string>('')

	const handleChange = (event: any) => {
		setValue(event.target.value)
	}
	const handleClickOpen = () => {
		toggleOpen()
	}

	const handleClose = () => {
		toggleOpen()
	}

	const handleDelete = () => {
		if (value) {
			dispatch(userOperations.deleteUser(value))
			handleClose()
		}
	}

	return (
		<PageLayout>
			<Container>
				{ user && (
					<Box sx={ { mt: 4 } }>
						<Typography sx={ { fontSize: 14 } }>firstName:</Typography>
						<Typography sx={ { fontSize: 14, fontWeight: 'bold', mb: 2 } }>{ user?.firstName }</Typography>
						<Typography sx={ { fontSize: 14 } }>lastName:</Typography>
						<Typography sx={ { fontSize: 14, fontWeight: 'bold', mb: 2 } }>{ user?.lastName }</Typography>
						<Typography sx={ { fontSize: 14 } }>email:</Typography>
						<Typography sx={ { fontSize: 14, fontWeight: 'bold', mb: 2 } }>{ user?.email }</Typography>
						<Typography sx={ { fontSize: 14 } }>telephone:</Typography>
						<Typography sx={ { fontSize: 14, fontWeight: 'bold', mb: 2 } }>{ user?.telephone }</Typography>
						<Typography
							onClick={ handleClickOpen }
							sx={ {
								fontSize: 14,
								fontWeight: 'bold',
								mt: 4,
								mb: 2,
								color: 'crimson',
								cursor: 'pointer'
							} }
						>
							Delete
						</Typography>
						{/*<Typography sx={ { fontSize: 14, fontWeight: 'bold', mb: 2, cursor: 'pointer' } }>Edit</Typography>*/ }
					</Box>
				) }
			</Container>

			<Dialog open={ open } onClose={ handleClose }>
				<DialogTitle>Are you sure to delete the profile?</DialogTitle>
				<Box sx={ { padding: 1 } }>
					<DialogContentText>
						Enter your password
					</DialogContentText>
					<TextField
						onChange={ handleChange }
						value={ value }
						autoFocus
						margin="dense"
						id="pass"
						label="pass"
						type="text"
						fullWidth
						variant="standard"
					/>
				</Box>
				<DialogActions>
					<Button onClick={ handleClose }>Cancel</Button>
					<Button onClick={ handleDelete }>Delete</Button>
				</DialogActions>
			</Dialog>
		</PageLayout>
	)
}

export default Profile
