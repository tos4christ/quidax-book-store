import { Router } from 'express';
import signupRoute from './auth/signupRoute';
import signinRoute from './auth/signinRoute';
import signoutRoute from './auth/signoutRoute';
import userRoute from './userRoute';
import jwtCheck from '../utility/jwtCheck';

const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', signinRoute);
router.use('/report', jwtCheck, signoutRoute);
router.use('/users', jwtCheck, userRoute);

export default router;
