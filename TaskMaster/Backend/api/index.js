var express = require('express');
var app = module.exports = express();

var taskgroup = require('./taskgroup');
var job = require('./job/job');


app.get('/', function(req, res) {
    res.json({
        message: 'API v1 home'
    });
});

app.use('/taskgroup', taskgroup);
app.use('/job', job);