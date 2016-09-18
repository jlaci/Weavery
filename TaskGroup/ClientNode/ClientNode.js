var kademlia = require('kad');
var WebRTC = require('kad-webrtc');
var webSocket = require('./lib/web-socket');
var SignalClient = require('./lib/signal-client');
var EventEmitter = require('events').EventEmitter;

var seed = {
    nick: "seed"
};

var nodeNick = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
  return v.toString(16);
});
var signalClient = new SignalClient(nodeNick);

webSocket.on('open', function() {
  console.log('Setting up Kademlia ClientNode.');
  var thisNode = new kademlia.Node({
    transport: new WebRTC(new WebRTC.Contact({
      nick: nodeNick
    }), { signaller: signalClient }),
    storage: new kademlia.storage.LocalStorage(nodeNick)
  });

  thisNode.connect(seed, function(err) {
    if(err) {
      document.getElementById("status").innerHTML = 'Failed' + err;
    } else {
      document.getElementById("status").innerHTML = 'Connected';
    }
  });

  window.Weavery = {
    dht: thisNode
  }
});
