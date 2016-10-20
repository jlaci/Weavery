var express = require('express');
var app = module.exports = express();
var config = require('./../../config/');
var request = require('request');

function proxy(req, res) {
    request(config.configUrl + req.originalUrl, function (error, response, body) {
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