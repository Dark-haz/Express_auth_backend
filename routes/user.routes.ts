import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { jwtMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/me', jwtMiddleware, UserController.me);


export default router;
