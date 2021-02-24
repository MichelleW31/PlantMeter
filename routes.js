const express = require('express')
// const pool = require('./pg-connection-pool.js').pool
const app = express()

app.get('/', function (req, res) {
    console.log("get call has been made")
})

app.post('/av_vera' function(req, res) {
    
})