JobDescription = function(id, size) {
  this.id = id;
  this.size = size;
}

JobDescription.prototype = {
  id: null,
  size: null
}

JobProgram = function(jobId, program) {
  this.jobId = jobId;
  this.program = program;
}

JobProgram.prototype = {
  jobId: null,
  program: null
}

JobDataPart = function(jobId, data, index) {
  this.jobId = jobId;
  this.data = data;
  this.index = index;
}

JobDataPart.prototype = {
  jobId: null,
  data: null,
  index: null
}
