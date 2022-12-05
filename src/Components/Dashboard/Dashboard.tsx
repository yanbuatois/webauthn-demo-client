import Menu from './Menu/Menu';
import {
	HashRouter,
	Navigate,
	redirect,
	Route,
	Routes,
} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import LoginContext from '../../Context/LoginContext';
import Login from './Login/Login';
import Register from './Register/Register';
import Logout from './Logout/Logout';
import UserProfile from './UserProfile/UserProfile';
import { CircularProgress, Container } from '@mui/material';
import { getUserData } from '../../Utils/apiCalls';

export default function Dashboard(): JSX.Element {
	const [loading, setLoading] = useState<boolean>(false);
	const {
		loginData: { logged, token, user },
		setUser,
		setToken,
	} = useContext(LoginContext);

	useEffect(() => {
		(async () => {
			if (logged && !user && !loading) {
				setLoading(true);
				try {
					const userData = await getUserData();
					setUser(userData);
				} catch (e: unknown) {
					setToken('');
					setUser(null);
					redirect('/');
					console.error(e);
				} finally {
					setLoading(false);
				}
			}
		})().catch((err) => console.error(err));
	}, [logged, user, token, loading]);

	return loading ? (
		<CircularProgress />
	) : (
		<HashRouter>
			<Menu />
			<Container>
				<Routes>
					{logged ? (
						<>
							<Route path="/" element={<UserProfile />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="*" element={<Navigate to="/" />} />
						</>
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
		</HashRouter>
	);
}
