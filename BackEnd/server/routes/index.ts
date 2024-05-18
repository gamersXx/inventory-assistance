import prueba from '@/modules/prueba/routes';
import { Router } from 'express';

const router = Router();

router.use('/', prueba);

export default router;
