import logger from "../app.js";
import dotenv from "dotenv";
import { collection, objectid } from "../config/db.config.js";
dotenv.config();
class EventServices {
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
      return logger.error(error);
    }
  }
  async deletebyId(id) {
    try {
      const newid = objectid(id);
      const deletedEvent = await collection.findOneAndDelete({ _id: newid });
      if (deletedEvent) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return logger.error(error);
    }
  }
  async updateById(id, data) {
    try {
      const newid = objectid(id);
      const document = await collection.findOne({ _id: newid });
      if (document.length < 1) {
        throw new Error("No event found with this id");
      }
      if (document) {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(document, key)) {
            document[key] = data[key];
          } else {
            document[key] = data[key];
          }
        }
        const newDocument = await collection.replaceOne({ _id: newid }, document);
        return newDocument;
      }
    } catch (error) {
     return logger.error(error);
    }
  }
}

export default new EventServices();
