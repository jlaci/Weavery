var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskResultSchema = new Schema({
    taskId : {
        type: String,
        required: true
    },
    clientId : {
        type: String,
        required: true
    },
    connectionId : {
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

var Model = mongoose.model('TaskResult', taskResultSchema);
module.exports = Model;