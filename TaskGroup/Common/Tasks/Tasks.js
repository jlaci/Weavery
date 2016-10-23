var Jobs = {};

Jobs.JobDescription = function(id, size) {
    this.id = id;
    this.size = size;
};

Jobs.JobDescription.prototype = {
    id: null,
    size: null
};


Jobs.JobProgram = function(jobId, program) {
    this.jobId = jobId;
    this.program = program;
};

Jobs.JobProgram.prototype = {
    jobId: null,
    program: null
};


Jobs.JobDataPart = function(jobId, data, index) {
    this.jobId = jobId;
    this.data = data;
    this.index = index;
};

Jobs.JobDataPart.prototype = {
    jobId: null,
    data: null,
    index: null
};

module.exports = Jobs;
