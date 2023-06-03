import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import { productsRouter } from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.use('/products', productsRouter);

app.use('/uploads', express.static('uploads'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
