import { JwtPayload } from '@/types/JwtPayload';
import jwt from 'jsonwebtoken';

export const createJwtToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};
