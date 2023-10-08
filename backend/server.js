import express from "express";
import dotenv from 'dotenv';
import userRouter from './Routes/userRoute.js';

import { notFound, errorHandler } from "./Middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 300
const app = express();

app.get('/', (req, res) => res.send('Server ready'))
app.use('/api/users', userRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server start port ${port}`))