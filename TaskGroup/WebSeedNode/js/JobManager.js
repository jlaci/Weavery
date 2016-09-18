JobManager = function(seedNode) {
    this.seedNode = seedNode;
}

JobManager.prototype = {
  sendJob(jobDescription, jobProgram, jobDataParts) {
    //Update the job listing
    seedNode.dht.get('jobs', function(err, value) {
      var jobs = value;
      if(jobs === undefined) {
        jobs = [];
      }
      jobs.push(jobDescription);
      seedNode.dht.put('jobs', jobs, function() {});

      //Upload the program
      seedNode.dht.put(jobDescription.id + '_program', jobProgram, function() {});

      //Upload the parts
      for(var i = 0; i < jobDataParts.length; i++) {
        seedNode.dht.put(jobDescription.id + '_datapart_' + i, jobDataParts[i], function() {});
      }

    });
  },
  createTestJob : function() {
    var self = this;

    var id = 'testjob';
    var testDescription = new JobDescription(id, 100);
    var testProgram = new JobProgram(id, "function(data) { return 5 * data;}");
    var testData = [];
    for(var i = 0; i < 100; i++) {
      testData.push(new JobDataPart(id, i, i));
    }
    self.sendJob(testDescription, testProgram, testData);

  }
}
