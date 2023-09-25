import { Router } from 'express';
import { addDevice, borrow, listDevice } from '@/controllers/device.controller';

const router = Router();

router.post('/add', addDevice);
router.get('/', listDevice);
router.post('/borrow', borrow);
export default router;
