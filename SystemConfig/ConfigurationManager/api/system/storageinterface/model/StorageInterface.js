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
        unique: false
    },
    mongoUrl : {
        type: String,
        required: true
    }
});

var Model = mongoose.model('StorageInterface', storageInterfaceSchema);
module.exports = Model;