import { Router } from 'express';
import signupRoute from './signupRoute';
import signinRoute from './signinRoute';
import signoutRoute from './signoutRoute';
import jwtCheck from '../utility/jwtCheck';
import userController from '../controllers/userController';

const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', signinRoute);
router.use('/report', jwtCheck, signoutRoute);
router.use('/users', jwtCheck, userController);

export default router;
