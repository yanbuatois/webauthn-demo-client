import { useContext } from 'react';
import LoginContext from '../../../Context/LoginContext';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserProfile(): JSX.Element {
	const {
		loginData: { user },
	} = useContext(LoginContext);

	return (
		<Stack spacing={2}>
			<Typography variant="h3">Welcome, {user?.displayName}</Typography>
			<Typography variant="body1">
				You successfully discovered Authn. You can now{' '}
				<Link to="/logout">log out</Link> !
			</Typography>
		</Stack>
	);
}
