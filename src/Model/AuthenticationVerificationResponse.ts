import VerificationResponse from './VerificationResponse';

export default interface AuthenticationVerificationResponse
	extends VerificationResponse {
	token: string;
}
