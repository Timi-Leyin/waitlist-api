import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser"
import error from './middlewares/error';
import authRoute from './routes/auth.route';
import * as db from './config/db.config';
/*
 APPLICATION 
 @Express 
*/
const app = express();
db.config();
/* Log request only on development mode 👇 */
process.env.NODE_ENV == 'development' && app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoute);
app.use(error);

export default app;
