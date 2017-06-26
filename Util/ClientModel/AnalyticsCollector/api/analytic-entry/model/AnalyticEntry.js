var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionDataSchema = new Schema({
  plannedTime : {
    type: Date,
    required: true
  },
  time : {
    type: Date,
    required: true
  }
});

var benchmarkDataSchema = new Schema({
  location: {
    type: String
  },
  sessionData: [sessionDataSchema]
});

var clientInfoSchema = new Schema({
  fingerprint: {
    type: Number,
    required: true
  },
  browser: {
    type: Schema.Types.Mixed
  },
  webGL: {
    type: Schema.Types.Mixed
  }
});

var analyticEntrySchema = new Schema({
    benchmarkData : benchmarkDataSchema,
    clientInfo : clientInfoSchema
});

var Model = mongoose.model('AnalyticEntry', analyticEntrySchema);
module.exports = Model;
