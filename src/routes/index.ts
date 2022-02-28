import express from 'express';
import uniRouter from './university.routes';

const router = express.Router();

router.use('/', uniRouter);

export default router;
