import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import router from './routes';

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

export default app;
