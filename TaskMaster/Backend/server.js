var express = require('express');
var app = express();
var router = express.Router();
var config = require('./config');
var mongoose = require('mongoose');
mongoose.connect(config.mongoUri);

var api = require('./api');


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api/v1', api);
app.use('/', router);
app.listen(config.port);

console.log('TaskMaster started on ' + config.port + ' port!');