import React, { useState } from 'react';
import User from '../../../Model/User';
import { Button, Stack, TextField, Typography } from '@mui/material';

export default function Register(): JSX.Element {
	const [userData, setUserData] = useState<User>({
		username: '',
		displayName: '',
	});

	const handleFormChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();

		// TODO : REGISTER FRONTEND LOGIC
	};

	return (
		<Stack spacing={2}>
			<form onSubmit={handleSubmit}>
				<Typography variant="h3">Register</Typography>
				<TextField
					fullWidth
					label="Username"
					id="username"
					value={userData.username}
					onChange={handleFormChange}
				/>
				<TextField
					fullWidth
					label="Display name"
					id="displayName"
					value={userData.displayName}
					onChange={handleFormChange}
				/>
				<Button>Register</Button>
			</form>
		</Stack>
	);
}
