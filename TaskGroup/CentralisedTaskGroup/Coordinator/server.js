#!/usr/bin/env node
'use strict';

var server = require('http').createServer();
var url = require('url');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server });
var express = require('express');
var app = express();
var config = require('./config');
var request = require('request');
var Message = require('../../Common/Messages/Message');
var uuid = require('uuid');

app.use(function (req, res) {
    res.send({ msg: "hello" });
});


wss.on('connection', function connection(ws) {

    function sendRequest (path, cb) {
        request(path, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                cb(body);
            }
        });
    }

    function sendResponse(tag) {
        return function (data) {
            ws.send(JSON.stringify(new Message(tag, data)));
        }
    }

    var clientId = uuid.v4();   //TODO: send to client for storage
    var location = url.parse(ws.upgradeReq.url, true);
    console.log("WS connection to: " + location.path + " assigning ClientID" + clientId);

    if(location.path == '/client') {
        ws.on('message', function incoming(rawMessage) {
            //console.log('received: %s', rawMessage);
            var message;

            if(rawMessage) {
                try {
                    message = JSON.parse(rawMessage);

                    console.time("Client: " + clientId + " message " + message.tag);

                    if(message.tag == 'get_job_program') {
                        sendRequest(config.storageUrl + '/api/v1/job/' + message.data.jobId + '/program', sendResponse('job_program_result'));
                    } else if(message.tag == 'get_job_data_part') {
                        sendRequest(config.storageUrl + '/api/v1/job/' + message.data.jobId + '/data/' + message.data.index, sendResponse('job_data_part_result'));
                    } else if(message.tag == 'get_jobs') {
                        sendRequest(config.storageUrl + '/api/v1/job/', sendResponse('jobs_result'));
                    } else if(message.tag == 'upload_job_result') {

                        message.data.clientId = clientId;
                        var options = {
                            uri: config.storageUrl + '/api/v1/job/' + message.data.jobId + '/result/',
                            method: 'POST',
                            json: message.data
                        };

                        request(options, function (error, response) {
                            if (error || response.statusCode != 200) {
                                console.log('Failed to save JobResult');
                            }
                        });

                    } else {
                        console.log('Unknown message type ' + message)
                    }

                    console.timeEnd("Client: " + clientId + " message " + message.tag);
                }catch (e) {
                    console.log('Error processing message', e);
                }
            }

        });
    } else {
        console.log('Unknown endpoint! (' + location.path + ')');
        ws.close();
    }
});

server.on('request', app);
server.listen(config.port, function () { console.log('Coordinator listening on port ' + server.address().port) });
