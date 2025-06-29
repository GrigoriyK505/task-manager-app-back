import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const setupServer = () => {
  const app = express();
  app.use(cookieParser());

  app.use(cors());
  app.use(express.json());
  return app;
};