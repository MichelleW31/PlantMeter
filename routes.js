const express = require('express');
const app = express();
const path = require("path");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/sensordata.db')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.get('/', function (req, res) {
    console.log("get call was made");
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.post('/plants/:id', function (req, res) {
    let param = req.params;
    let body = req.body;
    console.log(req);
    console.log('this is the body', body);
    console.log('this is the param', param);

    res.send("ok");
})

module.exports = app;