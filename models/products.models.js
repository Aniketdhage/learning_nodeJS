import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'Price must be provided'],
  },
  features: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    required: [true, 'Company name must be provided'],
    enum: {
      values: ['samsung', 'dell', 'apple', 'mi'],
      message: ` is not supported`,
    },
  },
});

export { productSchema };
