import mongoose from 'mongoose';
import { connectDB } from './Database/connect.js';
import { MovieSchema } from './models/movie.models.js';
import MovieJsonData from './moviesJson.json' assert { type: 'json' };

const Movies = mongoose.model('Movies', MovieSchema);

const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://aniket_db:kNkkSghoiLn338wv@cluster0.wkijmfs.mongodb.net/ThapaAPI?retryWrites=true&w=majority&appName=Cluster0'
    );
    Movies.create(MovieJsonData);
    console.log('Movies stored in database');
  } catch (error) {
    console.log('error while string movie data', error);
  }
};

start();
