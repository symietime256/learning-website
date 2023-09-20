import { Router } from 'express';

import { list, show, edit, destroy } from '@/controllers/users';
import { checkJwt } from '@/middleware/checkJwt';
import { checkRole } from '@/middleware/checkRole';
import { validatorEdit } from '@/middleware/validation/users';
import { ROLE_TYPE } from '@/typeorm/entities/users/types';

const router = Router();

router.get('/', [checkJwt, checkRole([ROLE_TYPE.MANAGER])], list);

router.get('/:id([0-9]+)', [checkJwt, checkRole([ROLE_TYPE.MANAGER], true)], show);

router.patch('/:id([0-9]+)', [checkJwt, checkRole([ROLE_TYPE.MANAGER], true), validatorEdit], edit);

router.delete('/:id([0-9]+)', [checkJwt, checkRole([ROLE_TYPE.MANAGER], true)], destroy);

export default router;
