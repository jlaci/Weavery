#!/usr/bin/env node
'use strict';

var http = require('http');
var WebSocketServer = require('ws').Server;
var port = process.env.npm_package_config_port || 9999;
var server = require('http').createServer().listen(port);
var ws = new WebSocketServer({ server: server });

var jobMap = {};
var localJobMap = {
    get: function(key, cb) {
        cb(jobMap[key]);
    },
    put: function (key, value, cb) {
        jobMap[key] = value;
        cb();
    }
};

var JobManager = require(".././Jobs/JobManager");
var jobManager = new JobManager(localJobMap);


ws.on('connection', function(connection) {

    console.log('Coordinator connection');

    connection.on('message', function(messageData) {
        var message = JSON.parse(messageData);
        if(message.type === 'JobOffer') {
            jobManager.sendJob(message.jobDescription, message.jobProgram, message.jobDataParts);
        } else if(message.type === 'ClientJoin') {
            //TODO: handle client job assignement
        }

    });

    connection.on('open', function () {

    });

    connection.on('close', function () {

    });


});

console.log('listening on port', port);
