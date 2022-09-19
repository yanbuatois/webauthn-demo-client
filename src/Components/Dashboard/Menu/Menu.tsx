import {
	AppBar,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { useContext } from 'react';
import LoginContext from '../../../Context/LoginContext';
import { Link } from 'react-router-dom';

export default function Menu(): JSX.Element {
	const {
		loginData: { logged },
	} = useContext(LoginContext);

	return (
		<AppBar position="static">
			<Typography variant="h6" component="h2">
				Webauthn Demo
			</Typography>
			<Divider />
			<List>
				{logged ? (
					<></>
				) : (
					<>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								sx={{ textAlign: 'center' }}
								to="/login"
							>
								<ListItemText>Login</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								sx={{ textAlign: 'center' }}
								to="/register"
							>
								<ListItemText>Register</ListItemText>
							</ListItemButton>
						</ListItem>
					</>
				)}
			</List>
		</AppBar>
	);
}
