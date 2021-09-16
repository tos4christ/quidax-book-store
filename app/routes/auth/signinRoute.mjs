import { Router } from 'express';
import signinController from '../../controllers/auth/signinController';

const router = new Router();

router.post('/', signinController);

export default router;
