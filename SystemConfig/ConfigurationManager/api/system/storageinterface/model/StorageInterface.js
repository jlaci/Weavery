var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storageInterfaceSchema = new Schema({
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
    mongoUri : {
        type: String,
        required: true
    },
    port : {
        type: Number,
        min: 1000,
        max: 9999
    }
});

var Model = mongoose.model('StorageInterface', storageInterfaceSchema);
module.exports = Model;