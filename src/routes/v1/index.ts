import { Router } from 'express';
import device from './device';
import auth from './auth';
import users from './users';
import request from './absentRequest';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/devices', device);

router.use('/request', request);

export default router;
