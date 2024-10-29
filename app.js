import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import * as path from 'path';
import router from './routes/api.js';
import { MONGODB_CONNECTION, PORT, MAX_JSON_SIZE, URL_ENCODED, WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME } from './app/config/config.js';


const app = express();


// Global Application Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp())
app.use(cookieParser());
app.use(helmet());


// Rate Limiter
const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME, max:REQUEST_LIMIT_NUMBER});
app.use(limiter);


// Web Caching
app.set('etag', WEB_CACHE);


// MongoDB Connection
/*
You Need to Connect mongoDB Here
 */


// Set API Routes
app.use('/api', router);


// Set Application Storage
app.use(express.static('storage'));



// Run Your Express Back End Project
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});