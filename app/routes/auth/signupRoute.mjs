import express from 'express';
import signupController from '../../controllers/auth/signupController.mjs';

const { Router } = express;
const router = new Router();

router.post('/', signupController);

export default router;
