import { Router } from 'express';
import { DEVICE_STATUS } from '@/typeorm/entities/users/types';
import { addDevice } from '@/controllers/device.controller/addDevice';

const router = Router();

router.post('/add', addDevice);

export default router;
