import mongoose from 'mongoose';
import { connectDB } from './Database/connect.js';
import { productSchema } from './models/products.models.js';
import ProductJson from './productsJson.json' assert { type: 'json' };
import { configDotenv } from 'dotenv';
configDotenv();
const Products = mongoose.model('Product', productSchema);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Products.create(ProductJson);
    console.log('stored data');
  } catch (error) {
    console.log('error while db storing', error);
  }
};

start();
