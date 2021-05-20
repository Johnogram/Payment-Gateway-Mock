import { Router } from 'express';
import { paymentToken } from '../controllers/paymentToken';

const router: Router = Router({});

router.post('/paymentToken', paymentToken);

export { router };
