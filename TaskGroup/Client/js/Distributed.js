var DistributedClient = function(){
    this.startNode();
};


DistributedClient.prototype = {
    dht: null,
    startNode : function () {
        var kademlia = require('kad');
        var WebRTC = require('kad-webrtc');
        var webSocket = require('../lib/web-socket');
        var SignalClient = require('../lib/signal-client');

        var seed = {
            nick: "seed"
        };

        //Create the unique node nick, TODO: store in cookie/local storage
        var nodeNick = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
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
                    self.fetchJobs();
                }
            });
        });
    },

    uploadTaskPartResult: function(taskId, index, data, cb) {
        this.dht.put(taskId + '_result_' + index, data, function (err) {
            if(err) {
                console.log(err);
            } else {
                cb();
            }
        });
    },

    getTaskProgram: function(taskId, cb) {
        this.dht.get(taskId + '_program', function (err, value) {
            if (err) {
                console.log(err);
            } else {
                cb(value.program);
            }
        });
    },

    getTaskDataPart: function(taskId, index, cb) {
        this.dht.get(taskId + '_datapart_' + index, function (err, data) {
            if(err) {
                console.log(err);
            } else {
               cb(data.data);
            }
        });
    },

    fetchTasks: function(cb) {
        this.dht.get('tasks', function(err, value) {
            if (value === undefined) {
                cb([]);
                console.tasks("No task found!");
            } else {
                cb(value);
                console.tasks("Found " + value.length + " jobs");
            }
        });
    }
};

module.exports = DistributedClient;