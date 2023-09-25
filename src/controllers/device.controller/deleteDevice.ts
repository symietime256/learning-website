import { Device } from '@/typeorm/entities/users/device';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { CustomError } from '@/utils/response/custom-error/CustomError';

export const deleteDevice = async (req: Request, res: Response, next: NextFunction) => {
  const deviceRepository = getRepository(Device);
  const id = req.body.id;

  try {
    const device = await deviceRepository.findOne({ where: { id } });
    if (!device) {
      const customError = new CustomError(404, 'General', 'Not Found', [`Device with id:${id} doesn't exists.`]);
      return next(customError);
    }
    deviceRepository.delete(id);
    res.customSuccess(200, 'Device successful delete', { id: device.id, name_device: device.name_device });
  } catch (err) {
    const customError = new CustomError(500, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
