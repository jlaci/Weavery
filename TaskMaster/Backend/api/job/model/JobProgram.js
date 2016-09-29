var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobProgramSchema = new Schema({
    jobId : {
        type: String,
        required: true,
        unique: true
    },
    program : {
        type: String,
        required: true,
        unique: false
    }
});

module.exports = mongoose.model('JobProgram', jobProgramSchema);