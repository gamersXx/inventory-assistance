import { CustomError } from './CustomError';

export class BadRequest extends CustomError {
	constructor(message: string) {
		super(message, 400);
		this.name = 'BadRequest';
	}
}
