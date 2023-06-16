import express from 'express';
import bodyParser from "body-parser"
import cors from 'cors';
import morgan from 'morgan';
import router from '../routes/index.routes.js';
import errorHandler from './error.middleware.js';

const middleware = (app) => {
  app.use (bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(router);
  app.use('*', (req, res) => {
    res.status(200).send('Server is Running Check API docs');
  });
  app.use(errorHandler);
};

export default middleware;
