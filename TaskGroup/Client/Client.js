var webrtcSupport = require('webrtcsupport');
var DistributedClient = require('./js/Distributed.js');
var CentralizedClient = require('./js/Centralized.js');


var centralizedLocation = 'ws://localhost:8003/client';

var WeaveryClient = function() {
   if(false && webrtcSupport.support && webrtcSupport.supportDataChannel && webrtcSupport.PeerConnection) {
       console.log("Running in WebRTC capable browser, starting distributed client.");
       this.clientImpl = new DistributedClient();
   } else {
       console.log("WebRTC is not supported in the browser, starting centralized client.");
       this.clientImpl = new CentralizedClient(centralizedLocation);
   }
};

WeaveryClient.prototype = {
    clientImpl: null,
    jobs: [],
    workingMode: 'Centralized',

    executeJobPart: function(job, index, count, data, cb) {
        console.time("job: " + job.jobId + " jobPart: " + index);
        var program = new Function(['index', 'data'], job.program);
        var result = program(index, data);
        console.timeEnd("job: " + job.jobId + " jobPart: " + index);

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