import { Router } from 'express';

import auth from './auth';
import users from './users';
import request from './absentRequest';

const router = Router();

router.use('/auth', auth);

router.use('/users', users);

router.use('/request', request);

export default router;
