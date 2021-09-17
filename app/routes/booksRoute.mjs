import express from 'express';
import booksController from '../controllers/booksController.mjs';

const { Router } = express;
const router = new Router();

router.get('/featured', booksController.featured);
router.get('/all', booksController.all);
router.get('/:bookid', booksController.one);
router.post('/:bookid/rating', booksController.rate);
router.get('/:bookid/rating', booksController.rating);
router.post('/:bookid/like', booksController.like);
router.post('/search', booksController.search);

export default router;
