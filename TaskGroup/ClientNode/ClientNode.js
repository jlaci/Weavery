ClientNode = function() {
    this.startNode();
};

ClientNode.prototype = {
    dht: null,
    jobs: [],
    executeJobPart: function(job, index, count, data, cb) {
        var program = new Function('data', job.program);
        var result = program(data);

        this.dht.put(job.id + '_result_' + index, result, function (err) {
            if(err) {
                console.log(err);
            } else {
                cb(job, (index + 1) % job.size, count + 1);
            }
        });
    },
    executeJob: function(job) {
        var self = this;

        //Fetch the program
        self.dht.get(job.id + '_program', function (err, value) {
            if(err) {
                console.log(err);
            }
            job.program = value.program;

            //Execute the job parts
            var jobPartStep = function(job, index, count) {
                if(count < job.size) {
                    self.dht.get(job.id + '_datapart_' + index, function (err, data) {
                        if(err) {
                            console.log(err);
                        } else {
                            self.executeJobPart(job, index, count, data.data, jobPartStep);
                        }
                    });
                }
            };

            //Select a random starting point and begin executing
            var startingPoint = Math.floor(Math.random() * job.size);
            jobPartStep(job, startingPoint, 0);
        });
    },
    fetchJobs: function() {
        var self = this;
        if(self.dht !== undefined) {
            self.dht.get('jobs', function(err, value) {
                if (value === undefined) {
                    console.jobs("No job found!");
                } else {
                    self.jobs = value;
                    console.jobs("Found " + value.length + " jobs");
                }
            });
        }
    },
    startNode : function () {
        var kademlia = require('kad');
        var WebRTC = require('kad-webrtc');
        var webSocket = require('./lib/web-socket');
        var SignalClient = require('./lib/signal-client');

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
    }
};


