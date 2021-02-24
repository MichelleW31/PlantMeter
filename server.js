//Requires
import express, { static } from 'express';
const app = express();
const port = 8081;
const routes = require('./routes.js');

//Static Routes
app.use(('/')), routes;

//Run Server
app.listen(process.env.PORT || port, () => console.log(`Listening intently on port ${port}`));