import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routers/tasks.js';
import { getEnvVar } from './utils/getEnvVar.js';
import {notFoundHandler} from './middlewares/notFoundHandler.js';
import {errorHandler} from './middlewares/errorHandler.js';
import { logger } from './middlewares/logger.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use(logger);

  app.use(cookieParser());

  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }).on('error', (err) => {
    console.error('Failed to start server:', err.message);
  });
};