var mongoose = require('mongoose');
var _ = require('lodash');

var AnalyticEntry = require('./AnalyticEntry');
var config = require('./config');

var threshold = 10;
var timeStep = 500;
var mode = 'stationary';

mongoose.connect(config.mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  if(mode === 'total') {
    doTotal();
  } else if(mode === 'stationary') {
    doStationary();
  }
});

function doStationary() {
  AnalyticEntry.find({}, function (err, data) {

    _.forEach(data, function (entry) {
      if(entry.benchmarkData.sessionData.length > 0) {
        var aggregate = aggregateEntry(entry);
        console.log('Session time: ' + aggregate.totalTime + 'ms, potential steps: ' +  Math.ceil(aggregate.totalTime / timeStep) + ' actual steps: ' + (aggregate.correct + aggregate.incorrect) + '(' + (aggregate.correct + aggregate.incorrect) / Math.ceil(aggregate.totalTime / timeStep) * 100 + ')% correct: ' + aggregate.correct + ' incorrect: ' + aggregate.incorrect);
        console.log(JSON.stringify(calculateProbabilities(aggregate), null, 2));
      }
    });

  });
}

function doTotal() {

  var aggregate = {
    correct: 0,
    incorrect: 0,
    totalTime: 0
  };

  AnalyticEntry.find({}, function (err, data) {
    _.forEach(data, function (entry) {
      aggregateEntry(entry, aggregate);
    });

    console.log('Total time: ' + aggregate.totalTime + 'ms, potential steps: ' +  Math.ceil(aggregate.totalTime / timeStep) + ' actual steps: ' + (aggregate.correct + aggregate.incorrect) + '(' + (aggregate.correct + aggregate.incorrect) / (aggregate.totalTime / timeStep) * 100 + ')% correct: ' + aggregate.correct + ' incorrect: ' + aggregate.incorrect);
    console.log(JSON.stringify(calculateProbabilities(aggregate), null, 2));

  });
}

function calculateProbabilities(aggregate) {

  var potentialSteps = Math.ceil(aggregate.totalTime / timeStep);

  return {
    idle: 1 - (aggregate.correct + aggregate.incorrect) / potentialSteps,
    participate: (aggregate.correct + aggregate.incorrect) / potentialSteps,
    partAndCommitment: (aggregate.correct) / potentialSteps,
    partAndStarvation: (aggregate.incorrect) / potentialSteps
  };
}

function aggregateEntry(entry, aggregate) {
  if (!aggregate) {
    aggregate = {
      correct: 0,
      incorrect: 0,
      totalTime: 0
    };
  }

  if (entry.benchmarkData.sessionData.length > 0) {
    aggregate.totalTime += (entry.benchmarkData.sessionData[entry.benchmarkData.sessionData.length - 1].time.getTime() - entry.benchmarkData.sessionData[0].time.getTime());
  }

  _.forEach(entry.benchmarkData.sessionData, function (sessionEntry) {
    if (Math.abs(sessionEntry.time.getTime() - sessionEntry.plannedTime.getTime()) < threshold) {
      aggregate.correct++;
    } else {
      aggregate.incorrect++;
    }
  });

  return aggregate;
}
