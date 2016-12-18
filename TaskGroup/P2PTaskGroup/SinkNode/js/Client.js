var TaskManager = require("./TaskManager");
var SeedNode = require("./WebSinkNode");

var taskMap = new SeedNode();
window.taskManager = new TaskManager(taskMap);