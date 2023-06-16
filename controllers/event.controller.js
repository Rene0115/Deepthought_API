import EventModel from "../models/event.model.js";

class EventController {
  async create(req, res) {
    const { data } = req.body;
    if (!data) {
      return res.status(400).send({
        success: false,
        message: "Request body must contain information",
      });
    }
    try {
      await EventModel.save(data);
    return res.status(200).send({
        success: true,
        data: data
    })
    }
    catch(err){
        console.log(err);
        return res.status(400).send({
            success: false,
            error: err.message
        })
    }
  }
}
export default new EventController();
