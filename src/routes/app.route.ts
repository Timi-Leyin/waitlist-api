import express from 'express';
import newWaitlist from '../controllers/app/app.new-waitlist';
const route = express.Router();

route.post('/new-waitlist', newWaitlist);

export default route;
