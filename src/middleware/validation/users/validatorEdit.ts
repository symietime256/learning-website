import { User } from '@/typeorm/entities/users/User';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { ErrorValidation } from '@/utils/response/custom-error/types';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

export const validatorEdit = async (req: Request, res: Response, next: NextFunction) => {
  let { email, username } = req.body;
  const errorsValidation: ErrorValidation[] = [];
  const userRepository = getRepository(User);

  email = !email ? '' : email;
  username = !username ? '' : username;

  let user = await userRepository.findOne({ username });
  if (user) {
    errorsValidation.push({ username: `Username '${username}' already exists` });
  }

  user = await userRepository.findOne({ email });

  if (user) {
    errorsValidation.push({ username: `Email '${email}' already exists` });
  }

  if (errorsValidation.length !== 0) {
    const customError = new CustomError(400, 'Validation', 'Edit user validation error', null, null, errorsValidation);
    return next(customError);
  }
  return next();
};
