var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskMasterSchema = new Schema({
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
    storageUrl : {
        type: String,
        required: true
    },
    port : {
        type: Number,
        min: 1000,
        max: 9999
    }
});


var Model = mongoose.model('TaskMaster', taskMasterSchema);
module.exports = Model;