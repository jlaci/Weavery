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

var Model = mongoose.model('JobDescription', jobDescriptionSchema);
module.exports = Model;