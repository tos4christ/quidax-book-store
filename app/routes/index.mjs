import express from 'express';
import signupRoute from './auth/signupRoute.mjs';
import signinRoute from './auth/signinRoute.mjs';
import signoutRoute from './auth/signoutRoute.mjs';
import userRoute from './userRoute.mjs';
import booksRoute from './booksRoute.mjs';
import cartRoute from './cartRoute.mjs';
import jwtCheck from '../utility/jwtCheck.mjs';

const { Router } = express;
const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', signinRoute);
router.use('/signout', jwtCheck, signoutRoute);
router.use('/users', jwtCheck, userRoute);
router.use('/books', booksRoute);
router.use('/cart', cartRoute);

export default router;
