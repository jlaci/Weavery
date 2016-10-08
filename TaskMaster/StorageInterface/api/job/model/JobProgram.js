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
        required: true
    }
});

var Model = mongoose.model('JobProgram', jobProgramSchema);
module.exports = Model;