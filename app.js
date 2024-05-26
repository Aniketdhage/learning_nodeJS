import axios from 'axios';
import express from 'express';
import { router } from './Routes/products.routes.js';
import { connectDB } from './Database/connect.js';
import { configDotenv } from 'dotenv';
configDotenv();
// import { productSchema } from './models/products.models.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// let Products = new mongoose.model('Product', productSchema);

app.get('/', (req, res) => {
  res.status(200).send('I will be the master of NodeJS');
});

// middleware for routing
app.use('/api', router);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log('Database Connected!!');
    app.listen(PORT, () => {
      console.log('YES, I am running on PORT : ', PORT);
    });
  } catch (error) {
    console.log('Found error : ', error);
  }
};

start();
