var express = require('express');
var app = module.exports = express();
var TaskGroup = require('./model/TaskGroup');
var coordinator = require('./coordinator/coordinator');

app.get('/', function (req, res) {
    TaskGroup.findOne({}, function (err, taskGroup) {
        if(!err) {
            res.json(taskGroup);
        } else {
            throw err;
        }
    });
});

app.use('/coordinator', coordinator);