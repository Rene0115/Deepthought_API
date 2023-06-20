import dotenv from "dotenv";
import logger from "../app.js";
import { MongoClient, ObjectId } from "mongodb";
dotenv.config();

export const objectid = (id) =>{
   const newId = new ObjectId(id);
   return newId
}
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);
export let collection;


const database = async () => {
  await client.connect();
  const database = client.db(process.env.DATABASE_NAME);
  const collectionName = process.env.COLLECTION_NAME;
  collection = database.collection(collectionName);
  logger.info("Connected to database");
};

export default database;
