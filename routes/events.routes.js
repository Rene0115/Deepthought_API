import express from 'express';
import eventController from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/event', eventController.create);

export default eventRouter;
