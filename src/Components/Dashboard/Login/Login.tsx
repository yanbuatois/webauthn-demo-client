import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Login(): JSX.Element {
	const [username, setUsername] = useState('');

	const handleUsernameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUsername(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();

		// TODO : LOGIN FRONTEND LOGIC
	};

	return (
		<Stack spacing={2}>
			<form onSubmit={handleSubmit}>
				<Typography variant="h3">Login</Typography>
				<TextField
					fullWidth
					label="Username"
					id="username"
					value={username}
					onChange={handleUsernameChange}
				/>
				<Button>Login</Button>
			</form>
		</Stack>
	);
}
