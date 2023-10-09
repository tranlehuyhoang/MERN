import express from "express";
import dotenv from 'dotenv';
import userRouter from './Routes/userRoute.js';
import connectDB from './config/db.js'; import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 300
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => res.send('Server ready'))
app.use('/api/users', userRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server start port ${port}`))