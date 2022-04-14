"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyparser = require('body-parser');

var cors = require('cors');

var path = require('path');

var app = express();

var route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/MERN');
mongoose.connection.on('connected', function () {
  console.log('Sucessfully connected');
});
mongoose.connection.on('error', function (err) {
  if (err) {
    console.log('Connection is unsuccessful!' + err);
  }
});
var port = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/api', route);
app.get('/', function (req, res) {
  res.send('Ri-Research-Lab--Tarafder-Informatics-Ltd--Techbology-Academy--IEC-R-Foundation');
});
app.listen(port, function () {
  console.log('Server started at port' + port);
});