var _ = require('lodash');
var NormalDistribution = require('normal-distribution');

/**
 * Number of tasks
 * @type {number}
 */
var M = 3;

/**
 * Task capacity need diagrams (function of k - time step)
 * @type {[*]}
 */
var Ci = [
  [1,1,1,1,1,1],
  [1,2,1,2,1,2],
  [1,2,3,4,5,6]
];

/**
 * Number of clients
 * @type {number}
 */
var J = 10;

/**
 * Chance of client j participating at a given time instance
 * @type {[*]}
 */
var Pj = [0.49, 0.35, 0.64, 0.52, 0.45, 0.37, 0.61, 0.39, 0.5];

/**
 * Client "performance"
 * @type {[*]}
 */
var hj = [1, 1, 2, 1, 1, 3, 1, 2, 1];

/**
 * Client "battery drain / performance unit committed"
 * @type {[*]}
 */
var Bj = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];

/**
 * Tolerated battery drain
 * @type {Array}
 */
var Ej = [5, 6, 7, 8, 9, 8, 7, 6, 5, 4];

function participantsInTheSystem(k) {
  return J; //TODO: simulate them elavign and joining
}

function taskProgress(m, k) {

  var stdNormDist = new NormalDistribution(0, 1);


  var jk = participantsInTheSystem(k);


  var sum1 = 0;
  for (var i = 0; i < J; i++) {
    var sum2 = 0;
    for (var j = 0; j < jk; j++) {
      sum2 += Pj[j] * hj[j];  // TODO: j(k) is a number of clients still in the system, but its not necessarily a continuous interval
    }

    var sum3 = 0;
    for (var l = 0; l < m; l++) {
      sum3 += Ci[l][k] // TODO, what if k > the size of Ci? (Ci should be sparse)
    }

    var sum4 = 0;
    for (var n = 0; n < J; n++) {
      sum4 += hj[n] * hj[n] * Pj[n];
    }

    sum1 += (sum2 - sum3) / Math.sqrt(sum4);
  }


  var sum2 = 0;

  return stdNormDist.pdf(sum1) * sum2;

}

function taskCompletedInKmSteps(k, m) {

}