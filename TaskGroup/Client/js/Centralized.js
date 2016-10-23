var Message = require('../../Common/Messages/Message');
var EventEmitter = require('events').EventEmitter;

var CentralizedClient = function(url){
    this.url = url;
    this.startClient();
};


CentralizedClient.prototype = {
    url: '',
    ws: null,
    emitter: new EventEmitter(),

    startClient: function () {
        var self = this;
        this.ws = new WebSocket(this.url);

        this.ws.onerror = function(error) {
            console.log('Connection error!', error);
        };

        this.ws.onclose = function() {
            console.log('Connection to coordinator closed');
        };

        this.ws.onopen = function() {
            console.log('Connection to coordinator open');
        };

        this.ws.onmessage = function(rawMessage) {
            if(rawMessage && rawMessage.data) {
                try {
                    var message = JSON.parse(rawMessage.data);
                    message.data = JSON.parse(message.data);

                    if(message.tag == 'tasks_result') {
                        self.emitter.emit('tasks_result', message.data);
                    } else if(message.tag == 'task_program_result') {
                        self.emitter.emit('task_program_result', message.data);
                    } else if(message.tag == 'task_data_part_result') {
                        self.emitter.emit('task_data_part_result', message.data);
                    } else {
                        self.emitter.emit('message', message.data);
                    }
                } catch (e) {
                    console.log('Error parsing message: ' + e.message)
                }
            }

        };

        this.emitter.send = function(message) {
            self.ws.send(JSON.stringify(message));
        };
    },

    uploadTaskPartResult: function(taskId, index, data, cb) {
        this.emitter.send(new Message('upload_task_result', {taskId: taskId, index: index, result: data}));
        cb();
    },

    getTaskProgram: function(taskId, cb) {
        var self = this;
        self.emitter.send(new Message('get_task_program', {taskId: taskId}));
        self.emitter.once('task_program_result', function (data) {
           cb(data);
        });
    },

    getTaskDataPart: function(taskId, index, cb) {
        var self = this;
        self.emitter.send(new Message('get_task_data_part', {taskId: taskId, index: index}));
        self.emitter.once('task_data_part_result', function (data) {
            cb(data);
        });
    },

    fetchTasks: function(cb) {
        var self = this;
        self.emitter.send(new Message('get_tasks'));
        self.emitter.once('tasks_result', function (data) {
            cb(data);
        });
    }
};

module.exports = CentralizedClient;