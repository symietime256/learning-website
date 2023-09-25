import { Request, Response, NextFunction } from 'express';
import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { getRepository } from 'typeorm';
import { User } from '@/typeorm/entities/users/User';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { request } from 'http';
import { VALIDATE } from '@/constants/validateConstants';
import { ABSENT_REQUEST } from '@/enum/requestEnums';

export const requestAbsent = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.jwtPayload.id;
  const requestContent = req.body;
  const userRepository = getRepository(User);
  const absentRequestRepository = getRepository(AbsentRequest);

  try {
    const user = await userRepository.findOne({ where: { id } });
    const user_name = user.username;
    console.log(user_name);
    const requestAbsent = absentRequestRepository.create({
      username: user_name,
      main_point: requestContent.main_point,
      date_of_absence: requestContent.date_of_absence,
      reason: requestContent.reason,
      request_date: VALIDATE.DATE.CURRENT_TIME,
      is_accepted: ABSENT_REQUEST.PENDING,
      approved_date: null,
      approved_by: null,
      user: user,
    });

    try {
      await absentRequestRepository.save(requestAbsent);
      res.customSuccess(200, 'Successfully created', requestAbsent);
    } catch (err) {
      const customError = new CustomError(
        409,
        'Raw',
        `Request by '${requestAbsent.username}' can't be created.`,
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
