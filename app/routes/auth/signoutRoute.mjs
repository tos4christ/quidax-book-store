import express from 'express';
import signoutController from '../../controllers/auth/signoutController.mjs';

const { Router } = express;
const router = new Router();

router.post('/', signoutController);

export default router;
