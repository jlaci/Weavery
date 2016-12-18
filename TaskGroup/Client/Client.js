var webrtcSupport = require('webrtcsupport');
var DistributedClient = require('./js/Distributed.js');
var CentralizedClient = require('./js/Centralized.js');


var centralizedLocation = 'ws://192.168.10.231:8003/client';

var WeaveryClient = function() {
   if(webrtcSupport.support && webrtcSupport.supportDataChannel && webrtcSupport.PeerConnection) {
       console.log("Running in WebRTC capable browser, starting distributed client.");
       this.clientImpl = new DistributedClient();
   } else {
       console.log("WebRTC is not supported in the browser, starting centralized client.");
       this.clientImpl = new CentralizedClient(centralizedLocation);
   }
};

WeaveryClient.prototype = {
    clientImpl: null,
    tasks: [],
    workingMode: 'Centralized',

    executeTaskPart: function(task, index, count, data, cb) {
        console.time(task.taskId + "_" + index + "_" + this.clientImpl.id);
        var program = new Function(['index', 'data'], task.program);
        var result = program(index, data);
        console.timeEnd(task.taskId + "_" + index + "_" + this.clientImpl.id);

        this.clientImpl.uploadTaskPartResult(task.taskId, index, result, function () {
            cb(task, (index + 1) % task.size, count + 1);
        });
    },

    executeTask: function(task) {
        var self = this;

        this.clientImpl.getTaskProgram(task.taskId, function (data) {
            task.program = data.program;

            //Execute the task parts
            var taskPartStep = function(task, index, count) {
                if(count < task.size) {
                    self.clientImpl.getTaskDataPart(task.taskId, index, function (taskDataPart) {
                        self.executeTaskPart(task, index, count, taskDataPart.data, taskPartStep);
                    });
                }
            };

            //Select a random starting point and begin executing
            var startingPoint = Math.floor(Math.random() * task.size);
            taskPartStep(task, startingPoint, 0);
        });
    },

    fetchTasks: function() {
        var self = this;

        this.clientImpl.fetchTasks(function (tasks) {
            self.tasks = tasks;
            document.getElementById("tasks").innerHTML = JSON.stringify(tasks);
        });
    }
};

window.weaveryClient = new WeaveryClient();