var JobManager = require("../../../Common/JobManager");
var SeedNode = require("./WebSeedNode");

var jobMap = new SeedNode();
window.jobManager = new JobManager(jobMap);