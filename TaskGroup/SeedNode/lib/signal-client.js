'use strict';

var EventEmitter = require('events').EventEmitter;
var webSocket = require('./web-socket');
var inherits = require('util').inherits;

inherits(SignalClient, EventEmitter);

/**
* A client for talking to the signal server.
* @param {string} nick
* @constructor
*/
function SignalClient(nick) {
  var signalClient = this;

  webSocket.on('open', function() {
    console.log('WebSocket to SignalServer open, announcing ClientNode join with nick ' + nick);
    webSocket.send(JSON.stringify({ announceNick: nick }));
  });

  webSocket.on('close', function() {
    console.log('WebSocket to signal server closed.');
  });

  webSocket.on('message', function(message) {
    console.log('Received message on socket ' + message);
    var parsed = JSON.parse(message);
    if(nick === parsed.recipient) {
      EventEmitter.prototype.emit.call(signalClient, nick, parsed.message);
    }
  });
}

/**
* Send a signal to the signal server to perform a WebRTC handshake
* @param {string} recipient
* @param {string} message
*/
SignalClient.prototype.emit = function(recipient, message) {
  webSocket.send(JSON.stringify({ recipient: recipient, message: message }));
};

module.exports = SignalClient;
