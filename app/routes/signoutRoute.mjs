import { Router } from 'express';
import signoutController from '../controllers/signoutController';

const router = new Router();

router.post('/', signoutController);

export default router;
