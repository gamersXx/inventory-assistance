import { z } from 'zod';
import { UnprocessableEntity } from '@/exceptions';

const paramsValidationRules = z.object({
	description: z.string().min(1),
});

const NotaRequest = (params: object) => {
	try {
		const validatedParams = paramsValidationRules.parse(params);

		return validatedParams;
	} catch (error) {
		throw new UnprocessableEntity(error);
	}
};

export default NotaRequest;
