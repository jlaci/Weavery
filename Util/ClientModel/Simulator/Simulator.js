var _ = require('lodash');

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
var Pj = [0, 1, 0.35, 0.64, 0.52, 0.45, 0.37, 0.61, 0.39, 0.5, 0.44];

/**
 * Client "performance"
 * @type {[*]}
 */
var hj = [0, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1];

/**
 * Client "battery drain / performance unit committed"
 * @type {[*]}
 */
var Bj = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];

/**
 * Tolerated battery drain
 * @type {Array}
 */
var Ej = [5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3];

function participantsInTheSystem(k) {
  return J; //TODO: simulate them leaving and joining
}

function standardNormalDistribution(x) {
  return Math.exp(-0.5 * x) / Math.sqrt(2 * Math.PI);
}

function binomial(n, k) {
  if ((typeof n !== 'number') || (typeof k !== 'number'))
    return false;
  var coeff = 1;
  for (var x = n-k+1; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;
  return coeff;
}

function pIn(clientIndex, k) {
  return Pj[clientIndex];  // TODO: Uj (how many times the client has participated) is not known, assuming constant Pin for each client.
}

function taskProgress(m, k) {

  var jk = participantsInTheSystem(k);

  var sum1 = 0;
  for (var n = 1; n <= J; n++) {
    var sum2 = 0;
    for (var j = 1; j <= jk; j++) {
      sum2 += Pj[j] * hj[j];  // TODO: j(k) is a number of clients still in the system, but its not necessarily a continuous interval
    }

    var sum3 = 0;
    for (var i = 1; i <= m; i++) {
      sum3 += Ci[i][k] // TODO: what if k > the size of Ci? (Ci should be sparse)
    }

    var sum4 = 0;
    for (i = 1; i <= J; i++) {
      sum4 += hj[i] * hj[i] * Pj[i] * (1 - Pj[i]);
    }

    var sum5 = 0;
    var num_y = binomial(n, k); //TODO: are we missing the number of steps completed until this point?
    for (var y = 0; y < num_y; y++) {
      var prod = Math.pow(pIn(n, k), n) * (Math.pow(1 - pIn(n, k), k - n));  // TODO: k - n is really the number of steps where y = 0
      sum5 += prod;
    }

    sum1 += standardNormalDistribution((sum2 - sum3) / Math.sqrt(sum4)) * sum5;
  }


  return sum1;
}

function taskCompletedInKmSteps(k, m) {

}

console.log(taskProgress(1, 1));