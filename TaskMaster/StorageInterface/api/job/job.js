var express = require('express');
var app = module.exports = express();
var JobDescription = require('./model/JobDescription');
var JobProgram = require('./model/JobProgram');
var JobDataPart = require('./model/JobDataPart');

app.get('/', function (req, res) {
    JobDescription.find({}, function (err, jobs) {
        if(!err) {
            res.json(jobs);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});

app.get('/:jobId', function (req, res) {
    JobDescription.findOne({jobId : req.params.jobId}, function(err, result) {
        if(!err) {
            res.json(result);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});

app.get('/:jobId/program', function (req, res) {
    JobProgram.findOne({jobId : req.params.jobId}, function(err, result) {
        if(!err) {
            res.json(result);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});

app.get('/:jobId/data/', function (req, res) {
    JobDataPart.find({jobId : req.params.jobId}, function(err, result) {
        if(!err) {
            res.json(result);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});


app.get('/:jobId/data/:index', function (req, res) {
    JobDataPart.findOne({jobId : req.params.jobId, index: req.params.index}, function(err, result) {
        if(!err) {
            res.json(result);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});
