var webrtcSupport = require('webrtcsupport');
var DistributedClient = require('./js/Distributed.js');
var CentralizedClient = require('./js/Centralized.js');


var WeaveryClient = function() {
   if(false && webrtcSupport.support && webrtcSupport.supportDataChannel && webrtcSupport.PeerConnection) {
       console.log("Running in WebRTC capable browser, starting distributed client.");
       this.clientImpl = new DistributedClient();
   } else {
       console.log("WebRTC is not supported in the browser, starting centralized client.");
       this.clientImpl = new CentralizedClient('ws://localhost:8002/client');
   }
};

WeaveryClient.prototype = {
    clientImpl: null,
    jobs: [],
    workingMode: 'Centralized',

    executeJobPart: function(job, index, count, data, cb) {
        var program = new Function(['data', 'index'], job.program);
        var result = program(data);
        this.clientImpl.uploadJobPartResult(job.jobId, index, result, function () {
            cb(job, (index + 1) % job.size, count + 1);
        });
    },

    executeJob: function(job) {
        var self = this;

        this.clientImpl.getJobProgram(job.jobId, function (data) {
            job.program = data.program;

            //Execute the job parts
            var jobPartStep = function(job, index, count) {
                if(count < job.size) {
                    self.clientImpl.getJobDataPart(job.jobId, index, function (jobDataPart) {
                        self.executeJobPart(job, index, count, jobDataPart.data, jobPartStep);
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
            document.getElementById("jobs").innerHTML = JSON.stringify(jobs);
        });
    }
};

window.weaveryClient = new WeaveryClient();