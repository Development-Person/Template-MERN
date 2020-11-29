import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';

//Bring in global variables
dotenv.config();

//initialise express
const app = express();

//Connect to database
connectDB();

//Turn on morgan if in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//connect to PORT set in global environment, or else 5000
const PORT = process.env.PORT || 5000;

//Define routes
app.use('/api/users', userRoutes);

//Log server status
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
