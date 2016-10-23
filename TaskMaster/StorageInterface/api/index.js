var express = require('express');
var app = module.exports = express();

var task = require('./task/task');

app.get('/', function(req, res) {
    res.json({
        message: 'TaskMaster Storage Interface API v1 home'
    });
});

app.use('/task', task);