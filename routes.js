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

// app.post('/plants/:id', function (req, res) {
//     let id = req.params.id;
//     let body = req.body;
//     let {name, type, moisture, temperature, humidity} = body;

//     db.run('INSERT INTO sensorreadings (id, name, type, moisture, temperature, humidity) VALUES(?, ?, ?, ?, ?, ?)', `[${id}, ${name}, ${type}, ${moisture}, ${temperature}, ${humidity}]`);

//     res.send("ok");
// })

module.exports = app;