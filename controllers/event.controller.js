import logger from "../app.js";
import EventServices from "../services/event.services.js";

class EventController {
  async create(req, res) {
    const data = req.body;
    if (!data) {
      return res.status(400).send({
        success: false,
        message: "Request body must contain information"
      });
    }
    try {
      const event = await EventServices.save(data);

      return res.status(200).send({
        success: true,
        data: data,
        id: event.insertedId
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        success: false,
        error: err.message
      });
    }
  }
  async getById(req, res) {
    const id = req.query.id;
    if (!id) {
      const { type, limit, page } = req.query;
      try {
        const events = await EventServices.findPaginated(type, limit, page);
        return res.status(200).send({
          success: true,
          data: events
        });
      } catch (err) {
        logger.error(err);
        return res.status(400).send({
          success: false,
          error: err.message
        });
      }
      }
    try {
      const event = await EventServices.findById(id);
      if (event.length < 1) {
        return res.status(404).send({
          success: true,
          message: "Event with this id does not exist"
        });
      }
      return res.status(200).send({
        success: true,
        data: event
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        error: error.message
      });
    }
  }
  async deleteById(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).send({
          success: false,
          message: "Cannot perform operation without id"
        });
      }
      const deletedEvent = EventServices.deletebyId(id);
      return res.status(200).send({
        success: true,
        message: "Event deleted"
      });
    } catch (err) {
      logger.error(err);
      return res.status(400).send({
        success: false,
        error: err.message
      });
    }
  }
  async updateById(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      if (!id) {
        return res.status(400).send({
          success: false,
          message: "Cannot perform operation without id"
        });
      }
      const newEvent = await EventServices.updateById(id, data);
      return res.status(200).send({
        success: true,
        updatedEvent: newEvent
      });
    } catch (error) {
      logger.error(error);
      return res.status(error.status || error.statusCode || 400).send({
        success: false,
        error: error
      });
    }
  }

}
export default new EventController();
