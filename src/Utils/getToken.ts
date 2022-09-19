let storedToken = '';

export function setToken(token: string): void {
	storedToken = token;
}

export default function getToken(): string {
	return storedToken;
}
