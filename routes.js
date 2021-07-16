const express = require("express");
const app = express();
const path = require("path");
var sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/sensordata.db");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/", function (req, res) {
  console.log("get call was made");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/plants", function (req, res) {
  db.select("*");
});

app.post("/plants/:id", function (req, res) {
  const { id } = req.params;
  const { name, type, moisture, temperature, humidity } = req.body;

  console.log("posted");

  db.run(
    "INSERT INTO sensorreadings(id, name, type, moisture, temparature, humidity) values(?, ?, ?, ?, ?, ?)",
    (id, name, type, moisture, temperature, humidity)
  );

  res.send("ok");
});

module.exports = app;
