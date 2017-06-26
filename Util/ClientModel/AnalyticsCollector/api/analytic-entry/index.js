var express = require('express');
var app = module.exports = express();
var AnalyticEntry = require('./model/AnalyticEntry');

app.get('/', function (req, res) {
  AnalyticEntry.findOne({}, function (err, analyticEntry) {
        if(!err) {
            res.json(analyticEntry);
        } else {
            throw err;
        }
    });
});

app.post('/', function (req, res) {
  console.log('Analytics Entry received!');

  AnalyticEntry.create(req.body, function (err, analyticEntry) {
    if(!err) {
      res.json(analyticEntry);
    } else {
      throw err;
    }
  });
});