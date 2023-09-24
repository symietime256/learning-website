import { CustomError } from '@/utils/response/custom-error/CustomError';
import { ErrorValidation } from '@/utils/response/custom-error/types';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { ABSENT_REQUEST } from '@/enum/requestEnums';
import validator from 'validator';
import { checkFalsy } from '../auth/validatorFalsy';
import { VALIDATE } from '@/constants/validateConstants';

export const validatorRequest = async (req: Request, res: Response, next: NextFunction) => {
  const absentRequestBody = req.body;
  // console.log(absentRequestBody);
  // console.log({
  //   mainLength: absentRequestBody.main_point.length,
  //   doaLength: absentRequestBody.date_of_absence.length,
  //   reasonLength: absentRequestBody.reason.length,
  // });
  const errorsValidation: ErrorValidation[] = [];

  // 1. Form

  if (validator.isEmpty(absentRequestBody.main_point)) {
    errorsValidation.push({ main_point: VALIDATE.REQUEST.MAIN_POINT_EMPTY });
  }

  if (validator.isEmpty(absentRequestBody.date_of_absence)) {
    errorsValidation.push({ date_of_absence: VALIDATE.REQUEST.DATE_OF_ABSENCE_EMPTY });
  }

  if (validator.isEmpty(absentRequestBody.reason)) {
    errorsValidation.push({ reason: VALIDATE.REQUEST.REASON_EMPTY });
  }

  if (!validator.isLength(absentRequestBody.main_point, { min: VALIDATE.REQUEST.MAIN_POINT_MIN_CHAR })) {
    errorsValidation.push({ main_point: `Main Point must have at least ${VALIDATE.REQUEST.MAIN_POINT_MIN_CHAR}` });
  }

  if (!validator.isLength(absentRequestBody.reason, { min: VALIDATE.REQUEST.REASON_MIN_CHAR })) {
    errorsValidation.push({ main_point: `Reason field must have at least ${VALIDATE.REQUEST.REASON_MIN_CHAR}` });
  }

  if (!validator.isLength(absentRequestBody.reason, { max: VALIDATE.REQUEST.REASON_MAX_CHAR })) {
    errorsValidation.push({ main_point: `Reason field can't excess ${VALIDATE.REQUEST.REASON_MAX_CHAR} character` });
  }

  if (errorsValidation.length !== 0) {
    const customError = new CustomError(
      400,
      'Validation',
      'Make absent request validation error',
      null,
      null,
      errorsValidation,
    );
    return next(customError);
  }
  return next();
};
