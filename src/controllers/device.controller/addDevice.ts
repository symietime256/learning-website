import { Device } from '@/typeorm/entities/users/device';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const addDevice = async (req: Request, res: Response) => {
  const { name_device } = req.body;
  const deviceRepository = getRepository(Device);
  try {
    const newDevice = new Device();
    newDevice.name_device = name_device;
    await deviceRepository.save(newDevice);
    res.status(200).json(newDevice);
  } catch (err) {
    res.status(400).json(err);
  }
};
