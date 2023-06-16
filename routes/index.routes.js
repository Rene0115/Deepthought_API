import express from 'express';
import eventRouter from './events.routes.js';

const router = express.Router();

router.use('/api/v3/app', eventRouter);

export default router;


