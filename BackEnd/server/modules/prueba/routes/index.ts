import { Router } from 'express';
import NotaController from '../controllers/NotaController';

const VideoRoutes = Router();

VideoRoutes.get('/api/baer-db/GetNotes', NotaController.index);
VideoRoutes.post('/api/baer-db/AddNotes', NotaController.store);
VideoRoutes.delete('/api/baer-db/DeleteNotes/:id', NotaController.delete);

export default VideoRoutes;