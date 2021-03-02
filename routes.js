const express = require('express');
const app = express();
const path = require("path");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/sensordata.db')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

// app.get('/plants', function () {

// })

app.put('/plants:id', function (req, res) {
    let param = req.params
    console.log("post call has been made");
    console.log('this is the param', param);
})

module.exports = app;