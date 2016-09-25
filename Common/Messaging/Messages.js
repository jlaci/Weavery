var Messages = {};

Messages.JobOfferMessage = function(jobDescription, jobProgram, jobDataParts){
    this.jobDescription = jobDescription;
    this.jobProgram = jobProgram;
    this.jobDataParts = jobDataParts;
};

Messages.JobOfferMessage.prototype = {
    jobDescription: null,
    jobProgram: null,
    jobDataParts: []
};

modules.exports = Messages;