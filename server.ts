import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import userRoutes from './routes/user.routes';


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
