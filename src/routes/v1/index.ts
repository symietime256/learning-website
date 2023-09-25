import { Router } from 'express';
import device from './device';
import auth from './auth';
import users from './users';
const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/devices', device);

export default router;
