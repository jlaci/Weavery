var kademlia = require('kad');
var WebRTC = require('kad-webrtc');
var webSocket = require('./lib/web-socket');
var SignalClient = require('./lib/signal-client');
var EventEmitter = require('events').EventEmitter;

var nodeNick = 'seed';
var signalClient = new SignalClient(nodeNick);

var dht;

webSocket.on('open', function() {
  console.log('Setting up Kademlia WebSeedNode.');
  var thisNode = new kademlia.Node({
    transport: new WebRTC(new WebRTC.Contact({
      nick: nodeNick
    }), { signaller: signalClient }),
    storage: new kademlia.storage.LocalStorage(nodeNick)
  });

  dht = thisNode;
});
