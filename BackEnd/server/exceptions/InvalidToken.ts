import { CustomError } from './CustomError';

export class InvalidToken extends CustomError {
	constructor(message: string) {
		super(message, 401);
		this.name = 'InvalidToken';
	}
}
