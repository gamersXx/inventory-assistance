import errorParser from '@/helpers/errorParser';
import apm from 'elastic-apm-node';

export class CustomError extends Error {
	message!: any;
	status!: number;
	realMessage?: string;

	constructor(message: any, status: number = 500, realMessage?: string) {
		super(message);
		this.name = this.constructor.name;
		this.message = errorParser(message);
		this.status = status;
		this.realMessage = realMessage;

		const filterMessage = this.realMessage ? this.realMessage : this.message;
		if (this.status >= 500 || this.status === 401) {
			console.error('\x1b[31m', `[${new Date().toISOString()}] - ${this.status} - ${this.name}: ${filterMessage}`); //mensaje y status controlado
			console.trace(); //trakea la consola
			console.error('\x1b[0m'); // Restablecer color
		}
		apm.captureError(filterMessage);
	}
}
