/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './user.routes.js';
import eventRouter from './events.routes.js';

const router = express.Router();
router.use('/api/v3/app/users', userRouter);
router.use('/api/v3/app/events', eventRouter);

export default router;
