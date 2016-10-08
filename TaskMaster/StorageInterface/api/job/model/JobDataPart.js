var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobDataPartSchema = new Schema({
    jobId : {
        type: String,
        required: true
    },
    data : {
        type: Schema.Types.Mixed,
        required: true
    },
    index : {
        type: Number,
        required: true
    }
});

var Model = mongoose.model('JobDataPart', jobDataPartSchema);
module.exports = Model;