var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskGroupSchema = new Schema({
    id : {
        type: String,
        required: true,
        unique: true
    },
    name : {
        type: String,
        required: true,
        unique: false
    },
    workingMode : {
        type: String,
        required: true,
        enum: ['Distributed', 'Hybrid', 'Centralised']
    }
});

var Model = mongoose.model('TaskGroup', taskGroupSchema);
module.exports = Model;