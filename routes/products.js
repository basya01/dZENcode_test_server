import { Router } from 'express';
import { ProductController } from '../controllers/index.js';

const router = new Router();

router.get('/', ProductController.getAll);
router.get('/types', ProductController.getAllTypes);
router.post('/', ProductController.create);

export default router;
