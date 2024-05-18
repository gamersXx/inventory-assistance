declare type ParseSuccess<Output> = {
	success: true;
	data: Output;
};
declare type ParseError<Input> = {
	success: false;
	error: Input;
};
declare type ParseType<Input, Output> =
	| ParseSuccess<Output>
	| ParseError<Input>;

export declare type ParseValidateType = ParseType<
	Record<string, any>,
	Record<string, any>
>;

const errorParser = (error: any): any => {
	const formattedErrors: Record<string, string[]> = {};
	console.log(error);
	if (error && Array.isArray(error)) {
		error.forEach((validationError: any) => {
			const fieldName = validationError.path[0];
			const errorMessage = validationError.message;

			if (!formattedErrors[fieldName]) {
				formattedErrors[fieldName] = [];
			}

			formattedErrors[fieldName].push(errorMessage);
		});
	} else if (error.errors && Array.isArray(error.errors)) {
		error.errors.forEach((validationError: any) => {
			const fieldName = validationError.path[0];
			const errorMessage = validationError.message;

			if (!formattedErrors[fieldName]) {
				formattedErrors[fieldName] = [];
			}

			formattedErrors[fieldName].push(errorMessage);
		});
	} else {
		return { message: [error] };
	}
	return formattedErrors;
};

export default errorParser;
