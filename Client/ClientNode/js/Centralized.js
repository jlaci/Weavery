var Message = require('./Message');

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
            console.log('onerror', error);
        };

        this.ws.onclose = function() {
            console.log('onclose');
        };

        this.ws.onopen = function() {
            self.ws.emit('open');
        };

        this.ws.onmessage = function(message) {
            if(message.tag == 'jobs') {
                self.emitter.emit('jobs_result', message.data);
            } else if(message.tag == 'job_program') {
                self.emitter.emit('job_program_result', message.data);
            } else if(message.tag == 'job_data_part') {
                self.emitter.emit('job_data_part_result', message.data);
            } else {
                self.emitter.emit('message', message.data);
            }
        };

        this.emitter.send = function(message) {
            self.ws.send(message);
        };
    },

    uploadJobPartResult: function(jobId, index, data, cb) {

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