var express = require('express');
var app = module.exports = express();
var TaskDescription = require('./model/TaskDescription');
var TaskProgram = require('./model/TaskProgram');
var TaskDataPart = require('./model/TaskDataPart');
var TaskResult = require('./model/TaskResult');


function returnResults(res) {
    return function ret(err, result) {
        if(!err) {
            res.json(result);
        } else {
            res.statusCode = 500;
            res.end();
        }
    }
}

app.get('/', function (req, res) {
    if(req.query.states) {
        TaskDescription.find({"state" : {$in : req.query.states}}, returnResults(res));
    } else {
        TaskDescription.find({}, returnResults(res));
    }
});

app.get('/:taskId', function (req, res) {
    TaskDescription.findOne({taskId : req.params.taskId}, returnResults(res));
});

app.get('/:taskId/program', function (req, res) {
    TaskProgram.findOne({taskId : req.params.taskId}, returnResults(res));
});

app.get('/:taskId/data/', function (req, res) {
    TaskDataPart.find({taskId : req.params.taskId}, returnResults(res));
});

app.get('/:taskId/data/:index', function (req, res) {
    TaskDataPart.findOne({taskId : req.params.taskId, index: req.params.index}, returnResults(res));
});

app.get('/:taskId/result/', function (req, res) {
    TaskResult.find({taskId : req.params.taskId}, returnResults(res));
});

app.get('/:taskId/result/:index', function (req, res) {
    TaskResult.find({taskId : req.params.taskId, index: req.params.index}, returnResults(res));
});

app.post('/:taskId/result/', function (req, res) {
    new TaskResult(req.body).save(function (err) {
        if(err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        } else {
            res.statusCode = 200;
            res.end();
        }
    });
});