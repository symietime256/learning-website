import { Request, Response } from 'express';
import { borrowDeviceService } from '@/services/device.service/borrowDeviceService';

export const borrowDeviceController = async (req: Request, res: Response) => {
  const device = req.device;
  const userId = req.jwtPayload.id;

  try {
    const result = await borrowDeviceService(device, userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
