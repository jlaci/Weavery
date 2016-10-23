var express = require('express');
var app = module.exports = express();
var config = require('./../../config/');
var request = require('request');

function proxy(req, res) {
    request(config.storageUrl + req.originalUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.write(body);
            res.end();
        } else {
            console.log(response.statusCode + ' : ' + error);
            res.statusCode = response.statusCode;
            res.end();
        }
    });
}

app.get('/', proxy);
app.get('/:taskId', proxy);
app.get('/:taskId/program', proxy);
app.get('/:taskId/data', proxy);
app.get('/:taskId/data/:index', proxy);
app.get('/:taskId/result', proxy);
app.get('/:taskId/result/:index', proxy);