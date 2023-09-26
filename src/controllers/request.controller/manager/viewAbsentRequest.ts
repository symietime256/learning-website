import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { NextFunction } from 'express';
import { MoreThanOrEqual, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { requestViewWithIdFilter } from '@/services/request.service/viewRequest.service/requestViewWithIdFilter';
import { requestAbsent } from '../user/requestAbsent';

export const viewAbsentRequest = async (req: Request, res: Response, next: NextFunction) => {
  const queryId = req.query.id;

  try {
    const absentRequestLists = await requestViewWithIdFilter(queryId);

    res.customSuccess(200, 'List of absent requests', absentRequestLists);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of requests.`, null, err);
    return next(customError);
  }
};

// const absentRequestLists1 = await absentRequestRepository.find({
//   // relations: {
//   //   users: true,
//   // },
// where: {
//   user: {
//     id: 18,
//   },
// },
// });
