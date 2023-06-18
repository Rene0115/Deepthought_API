import EventModel from "../models/event.model.js";

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
      const event = await EventModel.save(data);

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
      return res.status(400).send({
        message: "No id provided"
      });
    }
    try {
      const event = await EventModel.findById(id);
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
}
export default new EventController();
