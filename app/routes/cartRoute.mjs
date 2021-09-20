import express from 'express';
import cartController from '../controllers/cartController.mjs';

const { Router } = express;
const router = new Router();

router.get('/', cartController.total);
router.post('/add', cartController.add);
router.put('/update/:cartId', cartController.update);

export default router;
