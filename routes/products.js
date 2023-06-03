import { Router } from 'express';
import { ProductController } from '../controllers/index.js';

const router = new Router();

router.get('/types', ProductController.getAllTypes);

export default router;
