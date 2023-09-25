import { Device } from '@/typeorm/entities/users/device';
import { DEVICE_STATUS } from '@/typeorm/entities/users/types';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const borrow = async (req: Request, res: Response) => {
  const deviceRepository = getRepository(Device);
  const id = req.body.id;
  try {
    const device = await deviceRepository.findOne(id);
    if (!device) {
      return res.status(404).json('Device Not Found');
    }
    if (device.device_status === DEVICE_STATUS.BORROWED) {
      return res.status(400).json('Device is already borrowed');
    }
    device.device_status = DEVICE_STATUS.BORROWED;
    await deviceRepository.save(device);
    return res.status(200).json('Device borrowed succesfully');
  } catch (err) {
    return res.status(500).json(err);
  }
};
