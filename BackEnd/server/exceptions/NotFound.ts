import { CustomError } from './CustomError';

export class NotFound extends CustomError {
	constructor(message: any, realMessage?: string) {
		super(message, 404, realMessage);
		this.name = 'NotFound';
	}
}