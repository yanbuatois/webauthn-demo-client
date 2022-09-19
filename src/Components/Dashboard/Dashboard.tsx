import Menu from './Menu/Menu';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import LoginContext from '../../Context/LoginContext';
import Login from './Login/Login';
import Register from './Register/Register';
import { Container } from '@mui/material';

export default function Dashboard(): JSX.Element {
	const {
		loginData: { logged },
	} = useContext(LoginContext);
	return (
		<BrowserRouter>
			<Menu />
			<Container>
				<Routes>
					{logged ? (
						<></>
					) : (
						<>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route
								path="*"
								element={<Navigate to="/login" />}
							/>
						</>
					)}
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
