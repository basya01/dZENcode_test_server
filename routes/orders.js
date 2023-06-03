import { Router } from 'express';
import { OrderController } from '../controllers/index.js';

const router = new Router();

router.get('/', OrderController.getAll);
router.post('/', OrderController.create);

export default router;
