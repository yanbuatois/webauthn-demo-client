import React, { useCallback, useState } from 'react';
import LoginContext, { LoginData } from '../../Context/LoginContext';
import { setToken } from '../../Utils/getToken';

export interface LoginProviderProps {
	children: React.ReactNode;
}

export default function LoginProvider({
	children,
}: LoginProviderProps): JSX.Element {
	const [loginData, setLoginDataState] = useState<LoginData>({
		logged: false,
		user: null,
		token: '',
	});

	const setLoginData = useCallback((data: LoginData) => {
		const { token } = data;

		setToken(token);

		setLoginDataState(data);
	}, []);

	return (
		<LoginContext.Provider
			value={{
				loginData,
				setLoginData,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
}
