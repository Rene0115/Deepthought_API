import { client } from "../config/db.config.js";

class EventModel {
  async save(document) {
    try {
      const database = client.db("Deepthought_API");
      const collectionName = "Events";
      const collection = database.collection(collectionName);
      await collection.insertOne(document);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

export default new EventModel();
