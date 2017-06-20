var fs = require('fs');
var _ = require('lodash');

fs.readFile('./measurements.json', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var measurement = JSON.parse(data);
  var timeStep = 500;

  var aggregate = {
    startTime: -1,
    endTime: -1,
    totalTime: 0,
    timeInIdle: 0,
    timeInParticipation: 0,
    totalSteps: 0,
    averageTimeStep: 0,
    timeStepRatio: 0
  };

  _.forEach(measurement.benchmarkData.sessionData, function (session) {
    if (aggregate.startTime === -1 || session.startTime < aggregate.startTime) {
      aggregate.startTime = session.startTime;
    }

    if (aggregate.endTime === -1 || session.endTime > aggregate.endTime) {
      aggregate.endTime = session.endTime;
    }

    aggregate.timeInParticipation += (session.endTime - session.startTime);
    aggregate.totalSteps += session.steps;
  });

  aggregate.totalTime = aggregate.endTime - aggregate.startTime;
  aggregate.timeInIdle = aggregate.totalTime - aggregate.timeInParticipation;
  aggregate.averageTimeStep = aggregate.timeInParticipation / aggregate.totalSteps;
  aggregate.timeStepRatio = timeStep / aggregate.averageTimeStep;

  console.log(JSON.stringify(aggregate, null, 2));

  var probabilities = {
    idle: aggregate.timeInIdle / aggregate.totalTime,
    participate:  aggregate.timeInParticipation / aggregate.totalTime,
    partAndResourceCommitment: (aggregate.timeInParticipation * aggregate.timeStepRatio) / aggregate.timeInParticipation, //is it correct?
    partAndResourceStarvation: 1 - ((aggregate.timeInParticipation * aggregate.timeStepRatio) /aggregate.timeInParticipation),
    globalResourceCommitment: (aggregate.timeInParticipation * aggregate.timeStepRatio) / aggregate.totalTime
  };

  console.log(JSON.stringify(probabilities, null, 2));

});