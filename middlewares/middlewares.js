import express from 'express';
import cors from 'cors';
import router from '../routes/index.routes.js';
import errorHandler from './error.middleware.js';

const middleware = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(router);
  app.use('*', (req, res) => {
    res.status(200).send('Server is Running Check API docs');
  });
  app.use(errorHandler);
};

export default middleware;
