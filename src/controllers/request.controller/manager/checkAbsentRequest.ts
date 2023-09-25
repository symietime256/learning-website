import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { NextFunction } from 'express';
import { MoreThanOrEqual, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { requestViewWithIdFilter } from '@/services/request.service/requestViewWithIdFilter';

export const checkAbsentRequest = async (req: Request, res: Response, next: NextFunction) => {
  const queryId = req.query.id;
  console.log(queryId);

  try {
    const absentRequestLists = requestViewWithIdFilter(queryId);
    console.log(absentRequestLists);

    // const absentRequestLists1 = await absentRequestRepository.find({
    //   // relations: {
    //   //   users: true,
    //   // },
    //   where: {
    //     user: {
    //       id: 18,
    //     },
    //   },
    // });
    res.customSuccess(200, 'List of absent requests', absentRequestLists);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of requests.`, null, err);
    return next(customError);
  }
};
