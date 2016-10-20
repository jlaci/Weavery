var express = require('express');
var app = module.exports = express();

var system = require('./system');
var taskgroup = require('./taskgroup');

app.get('/', function(req, res) {
    res.json({
        message: 'SystemConfig Interface API v1 home'
    });
});

app.use('/system', system);
app.use('/taskgroup', taskgroup);