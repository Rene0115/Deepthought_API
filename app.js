/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import pino from 'pino';
import middleware from './middlewares/middlewares.js';
import database from './config/db.config.js';

const app = express();
const logger = pino();

middleware(app);
const start = () => {
  database();
app.listen(process.env.PORT, () => {
  let port = process.env.PORT;
  if (port == null || port === '') {
    port = 8000;
  }

  logger.info(`Server is running on port ${port}`);
});
}
start();
export default logger;
