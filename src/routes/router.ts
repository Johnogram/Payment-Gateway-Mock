import { Router } from 'express';
import { paymentToken } from '../controllers/paymentToken';
import { processPayment } from '../controllers/processPayment';

const router: Router = Router({});

router.post('/paymentToken', paymentToken);
router.post('/processPayment', processPayment);

export { router };
