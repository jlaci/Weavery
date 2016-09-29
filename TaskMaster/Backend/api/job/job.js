var express = require('express');
var app = module.exports = express();
var JobDescription = require("./model/JobDescription");

app.get('/', function (req, res) {
    JobDescription.find({}, function (err, jobs) {
        if(!err) {
            res.json(jobs);
        } else {
            throw err;
        }
    });

});