import logger from "../app.js";
import dotenv from "dotenv";
import { collection, objectid } from "../config/db.config.js";
dotenv.config();
class EventModel {
  async save(document) {
    try {
      const event = await collection.insertOne(document);
      return event;
    } catch (error) {
      return logger.error(error);
    }
  }
  async findById(id) {
    try {
      const events = await collection.find({}).toArray();
      const newEvents = events.filter((event) => event._id.toString() === id);
      const eventData = newEvents.map((event) => {
        event._id = event._id.toString();
        return event;
      });
      return eventData;
    } catch (error) {
      logger.error(error);
    }
  }
  async deletebyId(id) {
    try {
      const newid = objectid(id)
      const deletedEvent = await collection.findOneAndDelete({ _id: newid });
      if(deletedEvent) {
        return true
      }
      else {
        return false;
      }
    } catch (error) {
      console.log(error);
      logger.error(error);
    }
  }
  async updatebyId(id) {
    
  }
}

export default new EventModel();
