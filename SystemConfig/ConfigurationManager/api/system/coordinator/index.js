var express = require('express');
var app = module.exports = express();

var Coordinator = require('./model/Coordinator');

app.get('/', function (req, res) {
    Coordinator.find({}, function (err, coordinator) {
        if(!err) {
            res.json(coordinator);
        } else {
            throw err;
        }
    });
});

app.get('/config', function (req, res) {
    Coordinator.findOne({}, function (err, coordinator) {
        if(!err) {
            res.json(coordinator);
        } else {
            throw err;
        }
    });
});