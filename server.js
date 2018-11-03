var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

mongoose.connect('mongodb://localhost/pokedex');

app.listen(5000, function() {
    console.log('Node server is running..');
});