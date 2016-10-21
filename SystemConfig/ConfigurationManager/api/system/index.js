var express = require('express');
var app = module.exports = express();

var storageinterface = require('./storageinterface');
var taskmaster = require('./taskmaster');
var coordinator = require('./coordinator');



app.use('/taskmaster', taskmaster);
app.use('/storageinterface', storageinterface);
app.use('/coordinator', coordinator);