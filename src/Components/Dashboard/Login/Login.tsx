import {
	Alert,
	AlertTitle,
	Button,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import {
	getAuthenticationOptions,
	verifyAuthentication,
} from '../../../Utils/apiCalls';
import { startAuthentication } from '@simplewebauthn/browser';
import LoginContext from '../../../Context/LoginContext';

export default function Login(): JSX.Element {
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [success, setSuccess] = useState<boolean>(false);
	const { setToken } = useContext(LoginContext);

	const handleUsernameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUsername(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent): Promise<void> => {
		if (loading) {
			return;
		}
		setLoading(true);
		event.preventDefault();

		try {
			const options = await getAuthenticationOptions(username);
			const resp = await startAuthentication(options);
			const { verified, token } = await verifyAuthentication(
				username,
				resp
			);

			if (verified) {
				setSuccess(true);
				setToken(token);
			} else {
				setError('The verification failed, please try again.');
			}
		} catch (e: unknown) {
			console.error(e);
			setError((e as Error).message);
		} finally {
			setLoading(false);
		}
	};

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form onSubmit={handleSubmit}>
			<Stack spacing={2}>
				<Typography variant="h3">Login</Typography>
				{error ? (
					<Alert severity="error" onClose={() => setError(undefined)}>
						<AlertTitle>An error occurred</AlertTitle>
						{error}
					</Alert>
				) : null}
				{success ? (
					<Alert severity="success">
						<AlertTitle>Success</AlertTitle>
						Your account was successfully logged in. You will be
						redirected.
					</Alert>
				) : null}
				<TextField
					fullWidth
					label="Username"
					id="username"
					value={username}
					onChange={handleUsernameChange}
					inputProps={{ minLength: 3 }}
					disabled={loading}
				/>
				<Button variant="contained" disabled={loading} type="submit">
					Login
				</Button>
			</Stack>
		</form>
	);
}
