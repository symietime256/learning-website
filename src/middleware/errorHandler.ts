import { CustomError } from '@/utils/response/custom-error/CustomError';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.HttpStatusCode).json(err.JSON);
};
