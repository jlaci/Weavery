var express = require('express');
var app = module.exports = express();
var JobDescription = require("./../../../../StorageInterface/api/job/model/JobDescription");
var config = require('./../../config/');
var request = require('request');

function proxy(path) {
    return function resolver(req, res) {
        request(path, function (error, response, body) {
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
}

app.get('/', proxy(config.storageUrl + '/api/v1/job'));
app.get('/:jobId', function(req, res) { return proxy(config.storageUrl + '/api/v1/job/' + req.params.jobId)(req, res)});
app.get('/:jobId/program', function(req, res) { return proxy(config.storageUrl + '/api/v1/job/' + req.params.jobId + '/program')(req, res)});
app.get('/:jobId/data', function(req, res) { return proxy(config.storageUrl + '/api/v1/job/' + req.params.jobId + '/data')(req, res)});
app.get('/:jobId/data/:index', function(req, res) { return proxy(config.storageUrl + '/api/v1/job/' + req.params.jobId + '/data/' + req.params.index)(req, res)});
app.get('/:jobId/result', function(req, res) { return proxy(config.storageUrl + '/api/v1/job/' + req.params.jobId + '/result')(req, res)});
app.get('/:jobId/result/:index', function(req, res) { return proxy(config.storageUrl + '/api/v1/job/' + req.params.jobId + '/result/' + req.params.index)(req, res)});