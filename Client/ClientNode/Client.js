var webrtcSupport = require('webrtcsupport');

var WeaveryClient = function() {
   if(webrtcSupport.support && webrtcSupport.supportDataChannel && webrtcSupport.PeerConnection) {
       console.log("Running in WebRTC capable browser, starting distributed client.");
       this.clientImpl = require('./js/Distributed');
   } else {
       console.log("WebRTC is not supported in the browser, starting centralized client.");
       this.clientImpl = require('./js/Centralized');
   }
};

WeaveryClient.prototype = {
    clientImpl: null,
    jobs: [],
    workingMode: 'Centralized',

    executeJobPart: function(job, index, count, data, cb) {
        var program = new Function('data', job.program);
        var result = program(data);
        this.clientImpl.uploadJobPartResult(job.id, index, result, function () {
            cb(job, (index + 1) % job.size, count + 1);
        });
    },

    executeJob: function(job) {
        var self = this;


        this.clientImpl.getJobProgram(job.id, function (program) {
            job.program = program;

            //Execute the job parts
            var jobPartStep = function(job, index, count) {
                if(count < job.size) {
                    self.clientImpl.getJobDataPart(job.id, index, function (jobDataPart) {
                        self.executeJobPart(job, index, count, jobDataPart, jobPartStep);

                    });
                }
            };

            //Select a random starting point and begin executing
            var startingPoint = Math.floor(Math.random() * job.size);
            jobPartStep(job, startingPoint, 0);
        });
    },

    fetchJobs: function() {
        var self = this;

        this.clientImpl.fetchJobs(function (jobs) {
            self.jobs = jobs;
        });
    }
};

module.exports = new WeaveryClient();
