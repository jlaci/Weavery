var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskDataPartSchema = new Schema({
    taskId : {
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

var Model = mongoose.model('TaskDataPart', taskDataPartSchema);
module.exports = Model;