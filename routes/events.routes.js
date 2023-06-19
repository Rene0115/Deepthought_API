import express from 'express';
import eventController from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/events', eventController.create);
eventRouter.get('/events', eventController.getById);
eventRouter.delete('/events/:id', eventController.deleteById);

export default eventRouter;
