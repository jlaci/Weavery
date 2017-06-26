var express = require('express');
var app = module.exports = express();

var AnalyticEntry = require('./analytic-entry');

app.get('/', function(req, res) {
    res.json({
        message: 'Participatory Client Analytics Collector Interface API v1 home'
    });
});

app.use('/analytic-entry', AnalyticEntry);