var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var joResultSchema = new Schema({
    jobId : {
        type: String,
        required: true
    },
    clientId : {
        type: String,
        required: true
    },
    result : {
        type: Schema.Types.Mixed,
        required: true
    },
    index : {
        type: Number,
        required: true
    }
});

var Model = mongoose.model('JobResult', joResultSchema);
module.exports = Model;