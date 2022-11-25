import React, { useCallback, useState } from 'react';
import LoginContext, { LoginData } from '../../Context/LoginContext';
import getToken, { setToken } from '../../Utils/getToken';
import User from '../../Model/User';

export interface LoginProviderProps {
	children: React.ReactNode;
}

export default function LoginProvider({
	children,
}: LoginProviderProps): JSX.Element {
	const [loginData, setLoginDataState] = useState<LoginData>({
		logged: !!getToken(),
		user: null,
		token: getToken(),
	});

	const setTokenCallback = useCallback((token: string) => {
		setToken(token);

		setLoginDataState((previousLoginDataState) => ({
			...previousLoginDataState,
			token,
			logged: !!token,
		}));
	}, []);

	const setUser = useCallback((user: User | null) => {
		setLoginDataState((previousLoginDataState) => ({
			...previousLoginDataState,
			user,
		}));
	}, []);

	return (
		<LoginContext.Provider
			value={{
				loginData,
				setToken: setTokenCallback,
				setUser,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
}
