import express from 'express';
import signinController from '../../controllers/auth/signinController.mjs';

const { Router } = express;
const router = new Router();

router.post('/', signinController);

export default router;
