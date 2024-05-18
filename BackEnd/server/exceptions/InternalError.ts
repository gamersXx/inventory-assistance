import { CustomError } from './CustomError';

export class InternalError extends CustomError {
	constructor(message: string, realMessage?: string) {
		super(message, 500, realMessage);
		this.name = 'Internal server error';
	}
}
