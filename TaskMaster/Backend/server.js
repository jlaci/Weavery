var express = require('express');
var app = express();
var router = express.Router();
var config = require('./config');
var mongoose = require('mongoose');
mongoose.connect(config.mongoUri);

var api = require('./api');

app.use('/api/v1', api);
app.use('/', router);
app.listen(config.port);

console.log('TaskMaster started on ' + config.port + ' port!');