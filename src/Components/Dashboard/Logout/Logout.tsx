import { redirect } from 'react-router-dom';
import { useContext } from 'react';

import LoginContext from '../../../Context/LoginContext';

export default function Logout(): JSX.Element {
	const { setToken, setUser } = useContext(LoginContext);
	setToken('');
	setUser(null);
	redirect('/');

	return <></>;
}
