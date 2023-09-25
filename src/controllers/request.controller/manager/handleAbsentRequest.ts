import { Request, Response, NextFunction } from 'express';
import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { getRepository } from 'typeorm';
import { User } from '@/typeorm/entities/users/User';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { request } from 'http';
import { VALIDATE } from '@/constants/validateConstants';
import { ABSENT_REQUEST, IIsAccepted } from '@/enum/requestEnums';

export const handleAbsentRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const managerName = req.jwtPayload.name;
    const { is_accepted } = req.body;
    const id = req.params.id;
    const absentRequestRepository = getRepository(AbsentRequest);
    let requestFind = await absentRequestRepository.findOne({ where: { id } });
    console.log(requestFind);
    //console.log((await requestFind).is_accepted);
    console.log(VALIDATE.DATE.CURRENT_TIME);

    if (
      (await requestFind).is_accepted == ABSENT_REQUEST.APPROVED ||
      (await requestFind).is_accepted == ABSENT_REQUEST.REJECTED
    ) {
      res.status(406).send(VALIDATE.REQUEST.IS_ACCEPTED_EXISTED);
    }
    try {
      await absentRequestRepository.update(id, {
        is_accepted: is_accepted,
        approved_by: managerName,
        approved_date: VALIDATE.DATE.CURRENT_TIME,
      });
      requestFind = await absentRequestRepository.findOne({ where: { id } });
      res.customSuccess(200, 'Successfully handle request', requestFind);
    } catch (err) {
      const customError = new CustomError(
        409,
        'Raw',
        `Request by '${(await requestFind).id}' approved or rejected fail.`,
        null,
        err,
      );
      return next(customError);
    }
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
