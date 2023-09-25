import { Router } from 'express';

import { list, show, edit, destroy } from '@/controllers/users.controller';
import { checkJwt } from '@/middleware/checkJwt';
import { checkRole } from '@/middleware/checkRole';
import { validatorEdit } from '@/middleware/validation/users';
import { ROLE_TYPE } from '@/typeorm/entities/users/types';
import { validatorRequest } from '@/middleware/validation/request/validatorRequest';
import { requestAbsent } from '@/controllers/request.controller/user/requestAbsent';
import { checkAbsentRequest } from '@/controllers/request.controller/manager/checkAbsentRequest';
import { validatorAcceptRequest } from '@/middleware/validation/request/validatorAcceptRequest';
import { handleAbsentRequest } from '@/controllers/request.controller/manager/handleAbsentRequest';

const router = Router();

router.get('/list', [checkJwt, checkRole([ROLE_TYPE.MANAGER], true)], checkAbsentRequest);

router.post('/', [checkJwt, checkRole([ROLE_TYPE.EMPLOYEE, ROLE_TYPE.HR], true), validatorRequest], requestAbsent);

router.patch(
  '/:id([0-9]+)',
  [checkJwt, checkRole([ROLE_TYPE.MANAGER], true), validatorAcceptRequest],
  handleAbsentRequest,
);

export default router;
