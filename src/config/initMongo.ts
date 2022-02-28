import mongoose from 'mongoose';

import env from './env';

const initMongo = async () => {
  mongoose.connection.on('error', () => console.log('Error'));
  mongoose.connection.on('connected', () => console.log('Connected'));

  try {
    return await mongoose.connect(env.DATABASE.MONGO_URI);
  } catch (err) {
    console.log('Error');
  }
};

export default initMongo;
