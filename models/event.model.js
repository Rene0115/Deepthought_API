import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  }

}, { timestamps: true });

const eventModel = mongoose.model('Event', eventSchema);

export default eventModel;
