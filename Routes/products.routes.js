import express from 'express';
import {
  getAllProducts,
  getAllProductsTesting,
  getProductsByPagination,
  getSpecificProduct,
} from '../Controllers/products.conroller.js';
import { getAllMovies } from '../Controllers/movies.controller.js';
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);
router.route('/getSpecificProduct').get(getSpecificProduct);
router.route('/productsByPagination').get(getProductsByPagination);
router.route('/movies').get(getAllMovies);

export { router };
