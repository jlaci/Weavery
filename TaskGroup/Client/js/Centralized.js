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

                    if(message.tag == 'jobs_result') {
                        self.emitter.emit('jobs_result', message.data);
                    } else if(message.tag == 'job_program_result') {
                        self.emitter.emit('job_program_result', message.data);
                    } else if(message.tag == 'job_data_part_result') {
                        self.emitter.emit('job_data_part_result', message.data);
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

    uploadJobPartResult: function(jobId, index, data, cb) {
        this.emitter.send(new Message('upload_job_result', {jobId: jobId, index: index, result: data}));
        cb();
    },

    getJobProgram: function(jobId, cb) {
        var self = this;
        self.emitter.send(new Message('get_job_program', {jobId: jobId}));
        self.emitter.once('job_program_result', function (data) {
           cb(data);
        });
    },

    getJobDataPart: function(jobId, index, cb) {
        var self = this;
        self.emitter.send(new Message('get_job_data_part', {jobId: jobId, index: index}));
        self.emitter.once('job_data_part_result', function (data) {
            cb(data);
        });
    },

    fetchJobs: function(cb) {
        var self = this;
        self.emitter.send(new Message('get_jobs'));
        self.emitter.once('jobs_result', function (data) {
            cb(data);
        });
    }
};

module.exports = CentralizedClient;