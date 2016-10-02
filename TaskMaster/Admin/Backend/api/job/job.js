var express = require('express');
var app = module.exports = express();
var JobDescription = require("./../../../../StorageInterface/api/job/model/JobDescription");
var config = require('./../../config/');
var request = require('request');


app.get('/', function (req, res) {
    request(config.storageUrl + '/api/v1/job', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.write(body);
            res.end();
        } else {
            console.log(response.statusCode + ' : ' + error)
            res.statusCode = response.statusCode;
            res.end();
        }
    });
});