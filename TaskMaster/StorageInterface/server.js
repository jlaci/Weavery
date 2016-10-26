var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var config = require('./config');
var request = require('request');
var mongoose = require('mongoose');


var api = require('./api');

app.use(bodyParser({limit: '50mb'}));

app.use(function (req, res, next) {
    var origin = req.headers.origin || 'http://localhost:8003';    //TODO: not secure, use pre selected origins


    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', origin);

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

app.use(bodyParser.json());
app.use('/api/v1', api);
app.use('/', router);


function validConfig(storageInterfaceConfig) {
    return storageInterfaceConfig.port && storageInterfaceConfig.mongoUri;
}

request(config.configUrl + '/api/v1/system/storageinterface/config', function (error, response, body) {

    var storageInterfaceConfig = JSON.parse(body);
    if (!error && response.statusCode == 200 && validConfig(storageInterfaceConfig)) {
        config.port = storageInterfaceConfig.port;
        config.mongoUri = storageInterfaceConfig.mongoUri;

        mongoose.connect(config.mongoUri);
        app.listen(config.port);

        console.log('StorageInterface started on ' + config.port + ' port!');
    } else {
        throw "Failed to configure StorageInterface!";
    }
});

