import { getUserDataUrl } from './apiUrls';
import getToken from './getToken';
import User from '../Model/User';

export const getUserData = async (): Promise<User> => {
	const userData = await (
		await fetch(getUserDataUrl(), {
			method: 'GET',
			headers: {
				Authorization: getAuthorizationHeader(),
			},
		})
	).json();

	return userData as User;
};

function getAuthorizationHeader(): string {
	return `Bearer ${getToken()}`;
}
