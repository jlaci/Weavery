var CentralizedClient = function(url){
    this.url = url;
};


CentralizedClient.prototype = {
    url: '',

    uploadJobPartResult: function(jobId, index, data, cb) {

    },

    getJobProgram: function(jobId, cb) {

    },

    getJobDataPart: function(jobId, index, cb) {

    },

    fetchJobs: function(cb) {

    }

};

module.exports = CentralizedClient;