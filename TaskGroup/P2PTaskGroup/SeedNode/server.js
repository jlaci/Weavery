var kademlia = require('kad');
var WebRTC = require('kad-webrtc');
var webSocket = require('./lib/web-socket');
var SignalClient = require('./lib/signal-client');
var EventEmitter = require('events').EventEmitter;
var wrtc = require('wrtc');

var nodeNick = 'seed';
var signalClient = new SignalClient(nodeNick);

var thisNode = new kademlia.Node({
  transport: new WebRTC(new WebRTC.Contact({nick: nodeNick}), {
    wrtc: wrtc,
    signaller: signalClient
  }),
  storage: new kademlia.storage.MemStore()
});

thisNode.on('connect', function(data) {
  console.log("Client connected to seed node " + data);
});
