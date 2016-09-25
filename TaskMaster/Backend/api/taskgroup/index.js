var express = require('express');
var app = module.exports = express();

app.get('/', function (req, res) {
    res.json({
        name : 'Test Task Group',
        workingMode: 'Hybrid'
    });
});
