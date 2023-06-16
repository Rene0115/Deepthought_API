import dotenv from 'dotenv';
import logger from '../app.js';
import { MongoClient } from 'mongodb'
dotenv.config();

const url = process.env.MONGODB_URI;
export const client = new MongoClient(url);



const database = async () => {
  await client.connect();
  logger.info('Connected to database');
};

export default database;
