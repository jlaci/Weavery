var express = require('express');
var app = express();
var router = express.Router();
var config = require('./config');
var request = require('request');

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

function validConfig(taskMasterConfig) {
    return taskMasterConfig.port && taskMasterConfig.storageUrl;
}

request(config.configUrl + '/api/v1/system/taskmaster/config', function (error, response, body) {

    var taskMasterConfig = JSON.parse(body);
    if (!error && response.statusCode == 200 && validConfig(taskMasterConfig)) {
        config.port = taskMasterConfig.port;
        config.storageUrl = taskMasterConfig.storageUrl;
        app.listen(config.port);
        console.log('TaskMaster started on ' + config.port + ' port!');
    } else {
        throw "Failed to configure TaskMaster Admin Backend!";
    }
});

