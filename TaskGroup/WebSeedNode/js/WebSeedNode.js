SeedNode = function() {
  this.startNode();
};

SeedNode.prototype = {
  dht: null,
  startNode: function() {
    var kademlia = require('kad');
    var WebRTC = require('kad-webrtc');
    var webSocket = require('../lib/web-socket');
    var SignalClient = require('../lib/signal-client');

    var nodeNick = 'seed';
    var signalClient = new SignalClient(nodeNick);

    var self = this;
    webSocket.on('open', function() {
      console.log('Setting up Kademlia WebSeedNode.');
      self.dht = new kademlia.Node({
        transport: new WebRTC(new WebRTC.Contact({nick: nodeNick}), {
          signaller: signalClient
        }),
        storage: new kademlia.storage.LocalStorage(nodeNick)
      });
    });
  }
};
