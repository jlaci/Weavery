var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coordinatorSchema = new Schema({
    id : {
        type: String,
        required: true,
        unique: true
    },
    name : {
        type: String,
        required: true,
        unique: true
    },
    port : {
        type: Number,
        min: 1000,
        max: 9999
    }
});

var Model = mongoose.model('Coordinator', coordinatorSchema);
module.exports = Model;