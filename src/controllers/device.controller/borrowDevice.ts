import { Device } from '@/typeorm/entities/users/device';
import { DEVICE_STATUS } from '@/typeorm/entities/users/types';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const borrowDevice = async (req: Request, res: Response) => {
  const deviceRepository = getRepository(Device);
  const id = req.body.id;
  try {
    const device = await deviceRepository.findOne(id);
    if (!device) {
      res.status(404).json('Device Not Found');
    }
    if (device.quantity === 0) {
      device.device_status = DEVICE_STATUS.UNAVAILABLE;
      await deviceRepository.save(device);
      res.status(400).json('There are no more devices to borrow');
    }
    if (device.quantity > 0) {
      device.device_status = DEVICE_STATUS.AVAILABLE;
      device.quantity -= 1;
      await deviceRepository.save(device);
      res.status(200).json('Device Borrowed Successfully');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
