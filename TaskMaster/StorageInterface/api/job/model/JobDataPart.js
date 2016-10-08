var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobDataPartSchema = new Schema({
    jobId : {
        type: String,
        required: true,
        unique: true
    },
    data : {
        type: Schema.Types.Mixed,
        required: true
    },
    index : {
        type: Number,
        required: true,
        unique: true
    }
});

var Model = mongoose.model('JobDataPart', jobDataPartSchema);
module.exports = Model;