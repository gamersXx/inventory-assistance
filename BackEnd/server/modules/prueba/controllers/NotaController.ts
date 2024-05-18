import { Request, Response } from 'express';
import NotaService from '../service/NotaService';
import { CustomError } from '@/exceptions';
import NotaRequest from '../request/NotaRequest';

class NotaController {
	private readonly service = new NotaService();

	public store = async (req: Request, res: Response) => {
		try {
			const { description } = NotaRequest(req.body)
			await this.service.store({description});
			return res.status(200).json('Add perfect');
		} catch (error) {
			if (error instanceof CustomError) {
				return res.status(error.status).json({ errors: error.message });
			}
			return res
				.status(500)
				.json({ errors: { message: ['Internal server error'] } });
		}
	};
	public index = async (req: Request, res: Response) => {
		try {
			const videos = await this.service.getAll();
			return res.status(200).json(videos);
		} catch (error) {
			if (error instanceof CustomError) {
				return res.status(error.status).json({ errors: error.message });
			}
			return res
				.status(500)
				.json({ errors: { message: ['Internal server error'] } });
		}
	};
	public delete = async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			await this.service.delete(id);
			return res.status(200).json('Delete perfect');
		} catch (error) {
			if (error instanceof CustomError) {
				return res.status(error.status).json({ errors: error.message });
			}
			return res
				.status(500)
				.json({ errors: { message: ['Internal server error'] } });
		}
	};
}
export default new NotaController();
