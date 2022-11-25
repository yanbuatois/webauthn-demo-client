export function setToken(token: string): void {
	console.log(token);
	localStorage.setItem('token', token);
}

export default function getToken(): string {
	return localStorage.getItem('token') ?? '';
}
