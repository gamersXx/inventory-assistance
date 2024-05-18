import { InternalError } from '@/exceptions/InternalError';
import NotaModel from '../models/NotaModel';
import { NotaInterface } from '../interfaces/NotaInterface';

class NotaService {
	async store({ description } : NotaInterface) {
		try {
			const result = await NotaModel.create({ description });
			return result;
		} catch (error) {
			throw new InternalError('Hubo un error al guardar la nota');
		}
	}
	async getAll() {
		const result = await NotaModel.find();
		return result;
	}
	async delete(id: string) {
		const result = await NotaModel.findByIdAndDelete(id);
		return result;
	}
}

export default NotaService;
