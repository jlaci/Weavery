var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobDataPartSchema = new Schema({
    jobId : {
        type: String,
        required: true,
        unique: true
    },
    data : {
        type: Mixed,
        required: true
    },
    index : {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('JobDataPart', jobDataPartSchema);