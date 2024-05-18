import { CustomError } from './CustomError';

export class InvalidPassword extends CustomError {
	public userId: string;
	constructor(message: string, userId: string) {
		super(message, 401);
		this.name = 'InvalidPassword';
		this.userId = userId;
	}
}