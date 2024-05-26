import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
  },
  description: {
    type: String,
    required: [true, 'description must be provided'],
  },
  releaseYear: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export { MovieSchema };
