import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import { productsRouter, ordersRouter } from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import http from 'http';

import initializeSocket from './socket/index.js';

dotenv.config();
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

initializeSocket(server);

app.use(cors());
app.use(json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.use('/uploads', express.static('uploads'));

app.use(errorHandler);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
