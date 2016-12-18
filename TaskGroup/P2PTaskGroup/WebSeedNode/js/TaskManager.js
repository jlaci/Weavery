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


                for(var i = 0; i < tasks.length; i++) {

                    var taskId = tasks[i].taskId;

                    //Program
                    var getProgramsRequest = new XMLHttpRequest();
                    getProgramsRequest.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var program = JSON.parse(this.responseText);

                            self.taskMap.put(taskId + "_program", {program : program}, function() {
                                console.log('Successfully stored program for ' + taskId);
                            });
                        }
                    };
                    getProgramsRequest.open('GET', storageInterfaceUrl + '/api/v1/task/' + taskId + '/program');
                    getProgramsRequest.send();

                    //Data aprts
                    var getDataPartsRequest = new XMLHttpRequest();
                    getDataPartsRequest.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var data = JSON.parse(this.responseText);
                            if(data === undefined) {
                                data = [];
                            }

                            for(var j = 0; j < data.length; j++) {
                                self.taskMap.put(taskId + "_datapart_" + j, data[j], function() {
                                    console.log('Successfully stored datapart ' + j + ' for ' + taskId);
                                });
                            }
                        }
                    };
                    getDataPartsRequest.open('GET', storageInterfaceUrl + '/api/v1/task/' + taskId + '/data');
                    getDataPartsRequest.send();

                }
            }
        };
        getTasksRequest.open('GET', storageInterfaceUrl + '/api/v1/task');
        getTasksRequest.send();


    }
};

module.exports = TaskManager;