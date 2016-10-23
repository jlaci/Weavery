var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskDescriptionSchema = new Schema({
    taskId : {
        type: String,
        required: true,
        unique: true
    },
    size : {
        type: Number,
        required: true
    },
    priority : {
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

var Model = mongoose.model('TaskDescription', taskDescriptionSchema);
module.exports = Model;