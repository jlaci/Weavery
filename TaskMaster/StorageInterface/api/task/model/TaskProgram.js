var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskProgramSchema = new Schema({
    taskId : {
        type: String,
        required: true,
        unique: true
    },
    program : {
        type: String,
        required: true
    }
});

var Model = mongoose.model('TaskProgram', taskProgramSchema);
module.exports = Model;