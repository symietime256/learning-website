import { Router } from 'express';
import { addDevice, listDevice, deleteDevice, borrowDevice, returnDevice } from '@/controllers/device.controller';
const router = Router();

router.post('/add', addDevice);
router.get('/', listDevice);
router.post('/borrow', borrowDevice);
router.delete('/delete', deleteDevice);
router.post('/return', returnDevice);
export default router;
