import express from 'express';
import userController from '../controllers/userController.mjs';

const { Router } = express;
const router = new Router();

router.post('/', userController);

export default router;
