var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

const port = 3000;

app.use(cors());

app.use(bodyparser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',route);

app.get('/', (req, res) => {

    res.send('Ri-Research-Lab--Tarafder-Informatics-Ltd--Techbology-Academy--IEC-R-Foundation')
});

app.listen(port, () => {
    console.log('Server started at port' + port)
});