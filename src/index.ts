import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { conversationsRouter, APIRouter } from './routes';
import Axios from 'axios';

require('dotenv').config();

Axios.defaults.headers.common['Authorization'] = `AccessKey ${process.env.PROD_KEY}`;
Axios.defaults.headers.common['Content-Type'] = 'application/json';
Axios.defaults.headers.common['Accept'] = 'application/json';

mongoose.connect('mongodb://localhost/messageBirdTest')
    .then(db => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.set('port', port);

app.use(morgan('dev'));
app.use(express.json());

app.use('/conversations', conversationsRouter);
app.use('/api', APIRouter);

app.listen(app.get('port'), () => console.log('Server running on ' + app.get('port')));

