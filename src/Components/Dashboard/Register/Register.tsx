import React, { useState } from 'react';
import User from '../../../Model/User';
import {
	Alert,
	AlertTitle,
	Button,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import {
	getRegistrationOptions,
	verifyRegistration,
} from '../../../Utils/apiCalls';
import { startRegistration } from '@simplewebauthn/browser';

export default function Register(): JSX.Element {
	const [userData, setUserData] = useState<User>({
		username: '',
		displayName: '',
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [success, setSuccess] = useState<boolean>(false);

	const handleFormChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		console.log(event.target.name);
		setUserData((oldState) => ({
			...oldState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent): Promise<void> => {
		if (loading) {
			return;
		}
		setLoading(true);
		event.preventDefault();

		try {
			const options = await getRegistrationOptions(userData);
			const resp = await startRegistration(options);
			const { verified } = await verifyRegistration(userData, resp);

			if (verified) {
				setSuccess(true);
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
				<Typography variant="h3">Register</Typography>
				{error ? (
					<Alert severity="error" onClose={() => setError(undefined)}>
						<AlertTitle>An error occurred</AlertTitle>
						{error}
					</Alert>
				) : null}
				{success ? (
					<Alert severity="success">
						<AlertTitle>Success</AlertTitle>
						Your account was successfully registered. You can now
						log in.
					</Alert>
				) : null}
				<TextField
					fullWidth
					label="Username"
					id="username"
					value={userData.username}
					onChange={handleFormChange}
					disabled={loading}
					name="username"
				/>
				<TextField
					fullWidth
					label="Display name"
					id="displayName"
					value={userData.displayName}
					onChange={handleFormChange}
					disabled={loading}
					name="displayName"
				/>
				<Button variant="contained" type="submit" disabled={loading}>
					Register
				</Button>
			</Stack>
		</form>
	);
}
