import { Device } from '@/typeorm/entities/users/device';
import { DEVICE_STATUS } from '@/typeorm/entities/users/types';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const returnDevice = async (req: Request, res: Response) => {
  const deviceRepository = getRepository(Device);
  const id = req.body.id;
  try {
    const device = await deviceRepository.findOne(id);
    if (!device) {
      return res.status(404).json('Device Not Found');
    }
    device.device_status = DEVICE_STATUS.AVAILABLE;
    device.quantity += 1;
    await deviceRepository.save(device);
    return res.status(200).json('Device returned successfully');
  } catch (err) {
    return res.status(500).json(err);
  }
};
