import express from 'express';
import morgan from 'morgan';
import { conversationsRouter } from './routes';

require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.set('port', port);

app.use(morgan('dev'));
app.use(express.json());

app.use('/conversations', conversationsRouter);

app.listen(app.get('port'), () => console.log('Server running on ' + app.get('port')));

  