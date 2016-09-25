var express = require('express');
var app = module.exports = express();
var statistics = require('./statistics');


app.get('/', function(req, res) {
    res.json({
        message: 'API v1 home'
    });
});

app.use('/statistics', statistics);
