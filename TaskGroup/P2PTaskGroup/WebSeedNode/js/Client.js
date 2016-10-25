var TaskManager = require("./TaskManager");
var SeedNode = require("./WebSeedNode");

var taskMap = new SeedNode();
window.taskManager = new TaskManager(taskMap);