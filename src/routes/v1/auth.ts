// import { login, changePassword, register } from 'controllers/auth';
import { login, changePassword, register } from '@/controllers/auth.controller';
import { checkJwt } from '@/middleware/checkJwt';
import { validatorLogin, validatorRegister, validatorChangePassword } from '@/middleware/validation/auth';
import { Router } from 'express';

const router = Router();

router.post('/login', [validatorLogin], login);
router.post('/register', [checkJwt], [validatorRegister], register);
router.post('/change-password', [checkJwt, validatorChangePassword], changePassword);

export default router;
