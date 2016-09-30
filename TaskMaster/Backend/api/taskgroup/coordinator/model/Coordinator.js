var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coordinatorSchema = new Schema({
    id : {
        type: String,
        required: true,
        unique: true
    },
    heartbeat : {
        type: Date
    }
});

module.exports = mongoose.model('Coordinator', coordinatorSchema);