'use strict';
var webSocket = require('./web-socket');

/**
 * A client for talking to the signal server.
 * @param {string} nick
 * @constructor
 */
function CoordinatorConnection() {
    var self = this;

    webSocket.on('open', function() {
        console.log('WebSocket to Coordinator open');
    });

    webSocket.on('message', function(message) {
        console.log('Received message on socket ' + message);
        var parsed = JSON.parse(message);
        if(parsed.type === 'status') {
            self.onStatus(message.data);
        } else if(parsed.type === 'clientJoin') {
            self.onClientJoin(message.data);
        } else if(parsed.type === 'clientLeave') {
            self.onClientLeave(message.data);
        } else if(parsed.type === 'result') {
            self.onResult(message.data);
        } else {
            console.log("Unknown message type " + parsed.type);
        }
    });
}

CoordinatorConnection.prototype = function (onStatus, onClientJoin, onClientLeave, onResult) {
    this.onStatus = onStatus;
    this.onClientJoin = onClientJoin;
    this.onClientLeave = onClientLeave;
    this.onResult = onResult;
};

module.exports = CoordinatorConnection;
