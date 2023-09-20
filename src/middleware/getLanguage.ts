import { Language } from '@/typeorm/entities/users/types';
import { Request, Response, NextFunction } from 'express';

export const getLanguage = (req: Request, res: Response, next: NextFunction) => {
  const acceptLanguageHeader = req.get('Accept-Language') as Language | null;
  if (!acceptLanguageHeader) {
    req.language = 'en-US';
    return next();
  }
  req.language = acceptLanguageHeader;
  return next();
};
