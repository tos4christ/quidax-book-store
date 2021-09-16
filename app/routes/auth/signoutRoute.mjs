import { Router } from 'express';
import signoutController from '../../controllers/auth/signoutController';

const router = new Router();

router.post('/', signoutController);

export default router;
