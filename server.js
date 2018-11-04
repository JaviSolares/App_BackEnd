var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
const router = require('./rutas/api');

mongoose.connect('mongodb://localhost/pokedex');

app.use(cors());

app.use(bodyparser.json());

app.use('/api/v1/pokemon', router);

app.listen(5000, function() {
    console.log('Node server is running..');
});