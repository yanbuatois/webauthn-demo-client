import { createContext } from 'react';
import User from '../Model/User';

export interface LoginData {
	logged: boolean;
	user: User | null;
	token: string;
}

export interface LoginContextData {
	loginData: LoginData;
	setLoginData: (loginData: LoginData) => void;
}

export default createContext<LoginContextData>({
	loginData: {
		logged: false,
		user: null,
		token: '',
	},
	setLoginData: () => {},
});
