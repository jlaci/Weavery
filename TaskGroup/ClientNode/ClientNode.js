'use strict';

var kademlia = require('kad');
var WebRTC = require('kad-webrtc');
var webSocket = require('./web-socket');
var SignalClient = require('./signal-client');
var EventEmitter = require('events').EventEmitter;

var seed = {
    nick: "seed"
};

var nodeNick = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
  return v.toString(16);
});
var signalClient = new SignalClient(nodeNick);
var dht;

webSocket.on('open', function() {

  var thisNode = new kademlia.Node({
    transport: new WebRTC(new WebRTC.Contact({
      nick: nodeNick
    }), { signaller: signalClient }),
    storage: new kademlia.storage.LocalStorage(nodeNick)
  });

  thisNode.connect(seed, function(err) {
    alert("Failed to connect to seed node! " + err)
  });

});
