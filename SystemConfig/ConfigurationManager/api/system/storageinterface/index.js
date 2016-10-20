var express = require('express');
var app = module.exports = express();

var StorageInterface = require('./model/StorageInterface');

app.get('/', function (req, res) {
    StorageInterface.find({}, function (err, storageInterface) {
        if(!err) {
            res.json(storageInterface);
        } else {
            throw err;
        }
    });
});

app.get('/config', function (req, res) {
    StorageInterface.findOne({}, function (err, storageInterface) {
        if(!err) {
            res.json(storageInterface);
        } else {
            throw err;
        }
    });
});