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
app.get('/:jobId', proxy);
app.get('/:jobId/program', proxy);
app.get('/:jobId/data', proxy);
app.get('/:jobId/data/:index', proxy);
app.get('/:jobId/result', proxy);
app.get('/:jobId/result/:index', proxy);