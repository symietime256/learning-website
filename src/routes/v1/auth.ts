// import { login, changePassword, register } from 'controllers/auth';
import { login, changePassword, register } from '@/controllers/auth';
import { checkJwt } from '@/middleware/checkJwt';
import { validatorLogin, validatorRegister, validatorChangePassword } from '@/middleware/validation/auth';
import { Router } from 'express';

const router = Router();

router.post('/login', [validatorLogin], login);
router.post('/register', [validatorRegister], register);
router.post('/change-password', [checkJwt, validatorChangePassword], changePassword);

export default router;
