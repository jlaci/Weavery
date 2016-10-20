var express = require('express');
var app = module.exports = express();

var storageinterface = require('./storageinterface');
var taskmaster = require('./taskmaster');


app.use('/taskmaster', taskmaster);
app.use('/storageinterface', storageinterface);