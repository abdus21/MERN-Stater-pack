import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import studentRouter from './routers/studentRoute.js';
import userRouter from './routers/userRouter.js';
import mongoDBConnection from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

// init express
const app = express()
dotenv.config();

// middleware impliment
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors());



// routes
app.use('/api/student', studentRouter)
app.use('/api/user', userRouter)

// use error midleware
app.use(errorHandler)


app.listen(process.env.SERVER_PORT || 5050,()=>{
    // mongo DB connection
    mongoDBConnection()
    console.log(`server is running`.bgGreen);
})