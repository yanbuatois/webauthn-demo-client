const API_ROOT = process.env.REACT_APP_API_ROOT ?? '';

export const getUserDataUrl = (): string => `${API_ROOT}/user`;
export const getRegistrationOptionsUrl = (): string =>
	`${API_ROOT}/registration/options`;
export const getVerifyRegistrationUrl = (): string =>
	`${API_ROOT}/registration/verification`;
export const getAuthenticationOptionsUrl = (): string =>
	`${API_ROOT}/authentication/options`;
export const getVerifyAuthenticationUrl = (): string =>
	`${API_ROOT}/authentication/verification`;
