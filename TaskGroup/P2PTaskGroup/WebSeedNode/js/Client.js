var TaskManager = require("../.././TaskManager");
var SeedNode = require("./WebSeedNode");

var jobMap = new SeedNode();
window.jobManager = new TaskManager(jobMap);