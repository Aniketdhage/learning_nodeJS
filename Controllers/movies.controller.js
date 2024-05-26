import mongoose from 'mongoose';
import { MovieSchema } from '../models/movie.models.js';

const Movies = mongoose.model('Movie', MovieSchema);

const getAllMovies = async (req, res) => {
  const realMoviesData = await Movies.find({});
  res.status(200).send({
    message: 'I am list of movies',
    data: realMoviesData,
  });
};

export { getAllMovies };
