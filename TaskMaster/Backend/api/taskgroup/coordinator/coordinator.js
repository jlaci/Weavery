var express = require('express');
var app = module.exports = express();

app.ws('/', function(ws, req) {

    ws.on('open', function() {
        console.log('WebSocket to Coordinator open');
    });

    ws.on('message', function(message) {
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
});

