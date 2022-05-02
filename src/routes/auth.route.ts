import { Router } from 'express';
import registerController from '../controllers/auth/auth.register';
import loginController from '../controllers/auth/auth.login';
import { email, username, password } from '../common/validator';
const route = Router();

route.post('/register', [email, username, password], registerController);
route.post('/login', loginController);

export default route;
