const express = require('express');
// const pool = require('./pg-connection-pool.js').pool
const app = express();
const path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.post('/av_vera', function (req, res) {
    console.log("post call has been made");
})

module.exports = app;