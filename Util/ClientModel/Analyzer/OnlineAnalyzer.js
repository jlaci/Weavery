var mongoose = require('mongoose');
var _ = require('lodash');

var AnalyticEntry = require('./AnalyticEntry');
var config = require('./config');

var threshold = 10;
var timeStep = 500;
var windowNumber = 5;
var mode = 'sliding';

mongoose.connect(config.mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  if (mode === 'total') {
    doTotal();
  } else if (mode === 'stationary') {
    doStationary();
  } else if (mode === 'sliding') {
    doSlidingWindow();
  }
});

function doSlidingWindow() {
  function calculateWindow(start, end, cb) {
    var totalAggregate = {
      correct: 0,
      incorrect: 0,
      totalTime: 0
    };

    AnalyticEntry.find({"benchmarkData.sessionData.plannedTime" : { $gte: start}}, function (err, data) {
      _.forEach(data, function (entry) {
        if (entry.benchmarkData.sessionData.length > 0) {

          entry.benchmarkData.sessionData = _.filter(entry.benchmarkData.sessionData, function (sessionDataEntry) {
            return sessionDataEntry.plannedTime.getTime() < end.getTime();
          });

          var aggregate = aggregateEntry(entry);
          totalAggregate.correct += aggregate.correct;
          totalAggregate.incorrect += aggregate.incorrect;
          totalAggregate.totalTime += aggregate.totalTime;
        }
      });

      cb(calculateProbabilities(totalAggregate));
    });
  }


  var start, end;
  AnalyticEntry.find({}).sort({"benchmarkData.sessionData.plannedTime" : 1}).limit(1).exec(function (err, first) {
    start = first[0].benchmarkData.sessionData[0].plannedTime;

    AnalyticEntry.find({}).sort({"benchmarkData.sessionData.plannedTime" : -1}).limit(1).exec(function (err, last) {
      end = last[0].benchmarkData.sessionData[last[0].benchmarkData.sessionData.length - 1].plannedTime;

      var windowLength = (end.getTime() - start.getTime()) / (windowNumber - 1);
      var probabilities = [];

      for(var i = 0; i < windowNumber; i++) {
        calculateWindow(new Date(start.getTime() + (windowLength * i)), new Date(start.getTime() + (windowLength * (i + 1))), function (result) {
          probabilities.push(result);

          if(probabilities.length === windowNumber) {
            console.log("Finished");
          }
        });
      }
    });
  });



}


function doStationary() {

  AnalyticEntry.find({}, function (err, data) {
    var probabilities = [];

    _.forEach(data, function (entry) {
      if (entry.benchmarkData.sessionData.length > 0) {
        var aggregate = aggregateEntry(entry);

        if(aggregate.totalTime > 1000) {
          var probability = calculateProbabilities(aggregate);
          probabilities.push(probability);
          console.log('Session time: ' + aggregate.totalTime + 'ms, potential steps: ' + Math.ceil(aggregate.totalTime / timeStep) + ' actual steps: ' + (aggregate.correct + aggregate.incorrect) + '(' + (aggregate.correct + aggregate.incorrect) / Math.ceil(aggregate.totalTime / timeStep) * 100 + ')% correct: ' + aggregate.correct + ' incorrect: ' + aggregate.incorrect);
          console.log(JSON.stringify(probability, null, 2));
        }
      }
    });

    var errors = {
      idle: [],
      partAndCommitment: [],
      partAndStarvation: []
    };

    for (var i = 0; i < probabilities.length - 1; i++) {
      var prob = probabilities[i];
      var next = probabilities[i + 1];

      errors.idle.push(Math.pow(next.idle - prob.idle, 2));
      errors.partAndCommitment.push(Math.pow(next.partAndCommitment - prob.partAndCommitment, 2));
      errors.partAndStarvation.push(Math.pow(next.partAndStarvation - prob.partAndStarvation, 2));
    }

    console.log(errors.idle);
    console.log(errors.partAndCommitment);
    console.log(errors.partAndStarvation);
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

  var potentialSteps = Math.ceil(aggregate.totalTime / timeStep) + 1;

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
