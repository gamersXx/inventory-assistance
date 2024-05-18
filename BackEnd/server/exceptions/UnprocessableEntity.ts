import { CustomError } from './CustomError';

export class UnprocessableEntity extends CustomError {
	constructor(message: any, realMessage?: string) {
		super(message, 422, realMessage);
		this.name = 'UnprocessableEntity';
	}
}
