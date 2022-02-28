import dotenv from 'dotenv';

const config = dotenv.config();

const env = {
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  SERVER: {
    PORT: process.env.PORT || 8000,
  },
  DATABASE: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

export default env;
