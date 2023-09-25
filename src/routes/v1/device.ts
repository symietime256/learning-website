import { Router } from 'express';
import { addDevice, listDevice, deleteDevice, borrowDevice, returnDevice } from '@/controllers/device.controller';
import { checkDeviceExistence } from '@/middleware/validation/device/checkDeviceExistence';
const router = Router();

router.post('/add', addDevice);
router.get('/', listDevice);
router.post('/borrow', checkDeviceExistence, borrowDevice);
router.delete('/delete', checkDeviceExistence, deleteDevice);
router.post('/return', checkDeviceExistence, returnDevice);
export default router;
