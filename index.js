import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());
app.use('/uploads', express.static('uploads'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
