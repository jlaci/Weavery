var express = require('express');
var app = module.exports = express();
var TaskGroup = require('./model/TaskGroup');

app.get('/', function (req, res) {
    TaskGroup.findOne({}, function (err, taskGroup) {
        if(!err) {
            res.json(taskGroup);
        } else {
            throw err;
        }
    });
});