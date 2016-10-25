var Task = require("./Task");

var storageInterfaceUrl = 'http://localhost:8001';

function TaskManager(jobMap) {
    this.taskMap = jobMap;
}

TaskManager.prototype = {
    taskMap: null,
    fillTasks : function() {
        var self = this;

        var getTasksRequest = new XMLHttpRequest();
        getTasksRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var tasks = JSON.parse(this.responseText);
                if(tasks === undefined) {
                    tasks = [];
                }
                self.taskMap.put('tasks', tasks, function() {
                    console.log('Successfully stored ' + tasks.length + 'tasks');
                });
            }
        };
        getTasksRequest.open('GET', storageInterfaceUrl + '/api/v1/task');
        getTasksRequest.send();
    }
};

module.exports = TaskManager;