import {
	AppBar,
	Box,
	Button,
	Divider,
	Toolbar,
	Typography,
} from '@mui/material';
import { useContext } from 'react';
import LoginContext from '../../../Context/LoginContext';
import { Link } from 'react-router-dom';

export default function Menu(): JSX.Element {
	const {
		loginData: { logged, user },
	} = useContext(LoginContext);

	return (
		<AppBar position="static" sx={{ mb: 3 }}>
			<Toolbar>
				<Typography
					variant="h6"
					component="h2"
					noWrap
					sx={{
						mr: 2,
						display: 'flex',
						flexGrow: 0,
					}}
				>
					Webauthn Demo
				</Typography>
				<Divider />
				{logged ? (
					<Box sx={{ flexGrow: 1, display: 'flex' }}>
						<Button
							component={Link}
							sx={{
								textAlign: 'center',
								my: 2,
								display: 'block',
							}}
							color="inherit"
							to="/"
						>
							{user?.displayName}
						</Button>
						<Button
							component={Link}
							sx={{
								textAlign: 'center',
								my: 2,
								display: 'block',
							}}
							to="/logout"
							color="inherit"
						>
							Logout
						</Button>
					</Box>
				) : (
					<Box sx={{ flexGrow: 1, display: 'flex' }}>
						<Button
							component={Link}
							sx={{
								textAlign: 'center',
								my: 2,
								display: 'block',
							}}
							to="/login"
							color="inherit"
						>
							Login
						</Button>
						<Button
							component={Link}
							sx={{
								textAlign: 'center',
								my: 2,
								display: 'block',
							}}
							to="/register"
							color="inherit"
						>
							Register
						</Button>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
}
