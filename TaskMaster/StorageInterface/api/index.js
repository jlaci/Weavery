var express = require('express');
var app = module.exports = express();

var job = require('./job/job');

app.get('/', function(req, res) {
    res.json({
        message: 'TaskMaster Storage Interface API v1 home'
    });
});

app.use('/job', job);