/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './user.routes.js';
import eventRouter from './events.routes.js';

const router = express.Router();
router.use('/users', userRouter);
router.use('/events', eventRouter);

export default router;
