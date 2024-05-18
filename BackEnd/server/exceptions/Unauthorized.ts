import { CustomError } from './CustomError';

export class Unauthorized extends CustomError {
	constructor(message: string) {
		super(message, 401);
		this.name = 'Unauthorized';
	}
}