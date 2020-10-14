import express from 'express';



const app = express();

import './database/connection';

import routes from './routes'

app.use(express.json() );
app.use(routes)

app.listen(3333);
