import { JwtPayload } from '@/types/JwtPayload';
import { getRepository } from 'typeorm';
import { AbsentRequest } from '@/typeorm/entities/users/AbsentRequest';
import { VALIDATE } from '@/constants/validateConstants';
import { CustomError } from '@/utils/response/custom-error/CustomError';

export const updateRequestStatus = async (managerName, is_accepted, id, requestFind) => {
  try {
    const absentRequestRepository = getRepository(AbsentRequest);

    await absentRequestRepository.update(id, {
      is_accepted: is_accepted,
      approved_by: managerName,
      approved_date: VALIDATE.DATE.CURRENT_TIME,
    });
    requestFind = await absentRequestRepository.findOne({ where: { id } });
  } catch (err) {
    const customError = new CustomError(
      409,
      'Raw',
      `Request by '${(await requestFind).id}' approved or rejected fail.`,
      null,
      err,
    );
  }
};
