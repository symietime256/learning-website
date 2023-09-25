import { Request, Response, NextFunction } from 'express';
import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { getRepository } from 'typeorm';
import { User } from '@/typeorm/entities/users/User';
import { CustomError } from '@/utils/response/custom-error/CustomError';
import { request } from 'http';
import { VALIDATE } from '@/constants/validateConstants';
import { ABSENT_REQUEST, IIsAccepted } from '@/enum/requestEnums';
import { checkIfRequestIsAcceptedOrNot } from '@/services/request.service/checkIfRequestIsAcceptedOrNot';
import { updateRequestStatus } from '@/services/request.service/updateRequestStatus';

export const handleAbsentRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const managerName = req.jwtPayload.name;
    const { is_accepted } = req.body;
    const id = req.params.id;
    const absentRequestRepository = getRepository(AbsentRequest);
    const requestFind = await absentRequestRepository.findOne({ where: { id } });
    console.log('🚀 ~ file: handleAbsentRequest.ts:17 ~ handleAbsentRequest ~ requestFind:', requestFind);

    if (checkIfRequestIsAcceptedOrNot(requestFind)) {
      res.status(406).send(VALIDATE.REQUEST.IS_ACCEPTED_EXISTED);
    }
    updateRequestStatus(managerName, is_accepted, id, requestFind);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    // return next(customError);
  }
};

interface ITableDefault {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ITable {
  a: string;
  b: string;
  c: string;
  d: string;
}

type IExtends = Partial<ITable> & Omit<ITableDefault, 'a' | 'b'>;

type ICreateTable = IExtends;
