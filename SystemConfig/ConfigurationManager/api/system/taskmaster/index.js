var express = require('express');
var app = module.exports = express();

var TaskMaster = require('./model/TaskMaster');

app.get('/', function (req, res) {
    TaskMaster.find({}, function (err, taskMaster) {
        if(!err) {
            res.json(taskMaster);
        } else {
            throw err;
        }
    });
});

app.get('/config', function (req, res) {
    TaskMaster.findOne({}, function (err, taskMaster) {
        if(!err) {
            res.json(taskMaster);
        } else {
            throw err;
        }
    });
});