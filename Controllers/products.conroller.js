import mongoose from 'mongoose';
import { productSchema } from '../models/products.models.js';

const Products = mongoose.model('Product', productSchema);

const getAllProducts = async (req, res) => {
  const realData = await Products.find({}).sort('price');
  res.status(200).json({ message: 'Successs', data: realData });
};
const getProductsByPagination = async (req, res) => {
  let page = req.query.page || 1;
  let limit = req.query.limit || 2;
  let skip = (page - 1) * limit;
  const realData = await Products.find({}).skip(skip).limit(limit);

  res
    .status(200)
    .json({ message: 'Successs', data: realData, length: realData.length });
};
const getSpecificProduct = async (req, res) => {
  const realData = await Products.find(req.query);
  res.status(200).json({ message: 'Successs', data: realData });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ message: 'Hey, I am all products testing list!!' });
};

export {
  getAllProducts,
  getAllProductsTesting,
  getSpecificProduct,
  getProductsByPagination,
};
