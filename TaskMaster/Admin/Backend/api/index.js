var express = require('express');
var app = module.exports = express();

var taskgroup = require('./taskgroup/taskgroup');
var task = require('./task/task');

app.get('/', function(req, res) {
    res.json({
        message: 'TaskMaster Admin WebApp API v1 home'
    });
});

app.use('/taskgroup', taskgroup);
app.use('/task', task);