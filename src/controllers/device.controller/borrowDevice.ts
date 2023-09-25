import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Device } from '@/typeorm/entities/users/device';
import { DEVICE_STATUS } from '@/typeorm/entities/users/types';

export const borrowDevice = async (req: Request, res: Response) => {
  const deviceRepository = getRepository(Device);
  const device = req.device;

  try {
    if (device.quantity === 0) {
      return res.status(400).json('There are no more devices to borrow');
    }
    if (device.quantity > 0) {
      device.device_status = DEVICE_STATUS.AVAILABLE;
      device.quantity -= 1;
      if (device.quantity === 0) {
        device.device_status = DEVICE_STATUS.UNAVAILABLE;
      }
      await deviceRepository.save(device);
      return res.status(200).json('Device Borrowed Successfully');
    } else {
      return res.status(400).json('There are no more devices to borrow');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
