import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

export const checkAbsentRequest = async (req: Request, res: Response, next: NextFunction) => {
  const absentRequestRepository = getRepository(AbsentRequest);

  try {
    const absentRequestLists = await absentRequestRepository.find({
      select: [
        'username',
        'main_point',
        'date_of_absence',
        'reason',
        'request_date',
        'is_accepted',
        'approved_date',
        'approved_by',
      ],
    });
    res.customSuccess(200, 'List of absent requests', absentRequestLists);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of requests.`, null, err);
    return next(customError);
  }
};
