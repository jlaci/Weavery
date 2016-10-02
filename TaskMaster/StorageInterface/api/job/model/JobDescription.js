var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobDescriptionSchema = new Schema({
    jobId : {
        type: String,
        required: true,
        unique: true
    },
    size : {
        type: Number,
        required: true
    },
    issuer : {
        type: String
    },
    createdDate : {
        type: Date
    },
    state : {
        type: String,
        required: true,
        enum: ['New', 'Active', 'Finished']
    }
});

module.exports = mongoose.model('JobDescription', jobDescriptionSchema);