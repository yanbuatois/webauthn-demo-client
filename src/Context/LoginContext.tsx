import { createContext } from 'react';
import User from '../Model/User';

export interface LoginData {
	logged: boolean;
	user: User | null;
	token: string;
}

export interface LoginContextData {
	loginData: LoginData;
	setToken: (loginData: string) => void;
	setUser: (user: User | null) => void;
}

export default createContext<LoginContextData>({
	loginData: {
		logged: false,
		user: null,
		token: '',
	},
	setToken: () => {},
	setUser: () => {},
});
