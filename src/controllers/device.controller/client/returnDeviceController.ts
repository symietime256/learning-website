import { Request, Response } from 'express';
import { returnDeviceService } from '@/services/device.service/returnDeviceService';

export const returnDeviceController = async (req: Request, res: Response) => {
  const device = req.device;

  try {
    const result = await returnDeviceService(device);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
