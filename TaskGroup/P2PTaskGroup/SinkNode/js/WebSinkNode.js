function SinkNode() {
  this.startNode();
}

SinkNode.prototype = {
    dht: null,
    startNode: function() {

        var kademlia = require('kad');
        var WebRTC = require('kad-webrtc');
        var webSocket = require('../lib/web-socket');
        var SignalClient = require('../lib/signal-client');

        var seed = {
            nick: "seed"
        };

        //Create the unique node nick, TODO: store in cookie/local storage
        var nodeNick = "sink";
        var signalClient = new SignalClient(nodeNick);


        //Join the DHT
        var self = this;
        webSocket.on('open', function() {
            console.log('Setting up Kademlia ClientNode.');
            self.dht = new kademlia.Node({
                transport: new WebRTC(
                    new WebRTC.Contact({
                        nick: nodeNick
                    }),
                    {
                        signaller: signalClient
                    }),
                storage: new kademlia.storage.LocalStorage(nodeNick)
            });

            self.dht.connect(seed, function(err) {
                if(err) {
                    document.getElementById("status").innerHTML = 'Failed' + err;
                } else {
                    document.getElementById("status").innerHTML = 'Connected';
                }
            });
        });
    },
    get: function(key, cb) {
        this.dht.get(key, cb);
    },
    put: function (key, value, cb) {
        this.dht.put(key, value, cb);
    }
};

module.exports = SinkNode;
