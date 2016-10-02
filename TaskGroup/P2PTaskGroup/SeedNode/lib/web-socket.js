var EventEmitter = require('events').EventEmitter;
var WebSocket = require('ws');

var emitter = new EventEmitter();
var socket = new WebSocket('ws://localhost:8888');

/**
* Handle socket errors
* @param {object} error
* @param {function} callback
*/
socket.onerror = function(error) {
  console.log('onerror', error);
  emitter.emit('error', error);
};

/**
* Handle socket close
*/
socket.onclose = function() {
  emitter.emit('close');
};

/**
* Handle socket open and propagate the event
*/
socket.onopen = function() {
  emitter.emit('open');
};

/**
* Handle socket message and propagate the event
*/
socket.onmessage = function(message) {
  emitter.emit('message', message.data);
};

/**
* Send the message over the socket
* @param {string} message
*/
emitter.send = function(message) {
  socket.send(message);
};

module.exports = emitter;
