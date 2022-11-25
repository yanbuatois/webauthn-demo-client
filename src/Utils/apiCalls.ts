import {
	RegistrationCredentialJSON,
	PublicKeyCredentialCreationOptionsJSON,
	PublicKeyCredentialRequestOptionsJSON,
	AuthenticationCredentialJSON,
} from '@simplewebauthn/typescript-types';
import {
	getAuthenticationOptionsUrl,
	getRegistrationOptionsUrl,
	getUserDataUrl,
	getVerifyAuthenticationUrl,
	getVerifyRegistrationUrl,
} from './apiUrls';
import getToken from './getToken';
import User from '../Model/User';
import VerificationResponse from '../Model/VerificationResponse';
import AuthenticationVerificationResponse from '../Model/AuthenticationVerificationResponse';

export const getUserData = async (): Promise<User> => {
	const response = await fetch(getUserDataUrl(), {
		method: 'GET',
		headers: {
			Authorization: getAuthorizationHeader(),
		},
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error((await response.json()).message);
	}

	return (await response.json()).user as User;
};

export const getRegistrationOptions = async (
	user: User
): Promise<PublicKeyCredentialCreationOptionsJSON> => {
	const response = await fetch(getRegistrationOptionsUrl(), {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error((await response.json()).message);
	}

	return (await response.json()) as PublicKeyCredentialCreationOptionsJSON;
};

export const verifyRegistration = async (
	user: User,
	credential: RegistrationCredentialJSON
): Promise<VerificationResponse> => {
	const response = await fetch(getVerifyRegistrationUrl(), {
		method: 'POST',
		body: JSON.stringify({
			userInfo: user,
			credential,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error((await response.json()).message);
	}

	return (await response.json()) as VerificationResponse;
};

export const getAuthenticationOptions = async (
	username: string
): Promise<PublicKeyCredentialRequestOptionsJSON> => {
	const response = await fetch(getAuthenticationOptionsUrl(), {
		method: 'POST',
		body: JSON.stringify({
			username,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error((await response.json()).message);
	}

	return (await response.json()) as PublicKeyCredentialRequestOptionsJSON;
};

export const verifyAuthentication = async (
	username: string,
	credential: AuthenticationCredentialJSON
): Promise<AuthenticationVerificationResponse> => {
	const response = await fetch(getVerifyAuthenticationUrl(), {
		method: 'POST',
		body: JSON.stringify({
			username,
			credential,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error((await response.json()).message);
	}

	return (await response.json()) as AuthenticationVerificationResponse;
};

function getAuthorizationHeader(): string {
	return `Bearer ${getToken()}`;
}
