import { Device } from '@/typeorm/entities/users/device';
import { DeviceUser } from '@/typeorm/entities/users/deviceUser';
import { DEVICE_STATUS } from '@/typeorm/entities/users/types';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const returnDevice = async (req: Request, res: Response) => {
  const deviceRepository = getRepository(Device);
  const device = req.device;
  try {
    if (device.id) {
      const deviceUserRepository = getRepository(DeviceUser);
      const deviceUser = await deviceUserRepository.findOne({ where: { device: device } });
      if (deviceUser) {
        await deviceUserRepository.remove(deviceUser);
        device.deviceUsers = null;
        device.device_status = DEVICE_STATUS.AVAILABLE;
        device.quantity += 1;
        await deviceRepository.save(device);
        res.status(200).json('Device returned successfully');
      } else {
        res.status(400).json('Device not borrowed by any user');
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
