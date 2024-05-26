import mongoose from 'mongoose';

const connectDB = (uri) => {
  console.log('connecteed db');
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export { connectDB };
