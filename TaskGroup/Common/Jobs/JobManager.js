var Jobs = require("./Jobs");

function JobManager(jobMap) {
    this.jobMap = jobMap;
}

JobManager.prototype = {
    jobMap: null,
    sendJob : function(jobDescription, jobProgram, jobDataParts) {
        var self = this;

        //Update the job listing
        self.jobMap.get('jobs', function(err, value) {
            //Get the current job description table and update it
            var jobs = value;
            if(jobs === undefined) {

                jobs = [];

            }
            jobs.push(jobDescription);
            self.jobMap.put('jobs', jobs, function() {});

            //Upload the program
            self.jobMap.put(jobDescription.id + '_program', jobProgram, function() {});

            //Upload the parts
            for(var i = 0; i < jobDataParts.length; i++) {
                self.jobMap.put(jobDescription.id + '_datapart_' + i, jobDataParts[i], function() {});
            }
        });
    },
    createTestJob : function() {
        var self = this;
        var id = 'testjob';
        var testDescription = new Jobs.JobDescription(id, 100);
        var testProgram = new Jobs.JobProgram(id, "return 5 * data");
        var testData = [];
        for(var i = 0; i < 100; i++) {
            testData.push(new Jobs.JobDataPart(id, i, i));
        }
        self.sendJob(testDescription, testProgram, testData);
    }
};

module.exports = JobManager;