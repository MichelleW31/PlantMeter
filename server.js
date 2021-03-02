//Requires
const express = require('express');
const app = express();
const port = 8081;
const routes = require('./routes.js');
const path = require("path");

//Static Routes

app.use(routes);

//Run Server
app.listen(process.env.PORT || port, () => console.log(`Listening intently on port ${port}`));