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
    sendResponse('client_join')(clientId);

    if(location.path == '/client') {
        ws.on('message', function incoming(rawMessage) {
            //console.log('received: %s', rawMessage);
            var message;

            if(rawMessage) {
                try {
                    message = JSON.parse(rawMessage);

                    console.time("Client: " + clientId + " message " + message.tag);

                    if(message.tag == 'get_task_program') {
                        sendRequest(config.storageUrl + '/api/v1/task/' + message.data.taskId + '/program', sendResponse('task_program_result'));
                    } else if(message.tag == 'get_task_data_part') {
                        sendRequest(config.storageUrl + '/api/v1/task/' + message.data.taskId + '/data/' + message.data.index, sendResponse('task_data_part_result'));
                    } else if(message.tag == 'get_tasks') {
                        sendRequest(config.storageUrl + '/api/v1/task?states[0]=Active', sendResponse('tasks_result'));
                    } else if(message.tag == 'upload_task_result') {

                        message.data.clientId = clientId;
                        message.data.connectionId = clientId;
                        var options = {
                            uri: config.storageUrl + '/api/v1/task/' + message.data.taskId + '/result/',
                            method: 'POST',
                            json: message.data
                        };

                        request(options, function (error, response) {
                            if (error || response.statusCode != 200) {
                                console.log('Failed to save TaskResult');
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


function validConfig(coordinatorConfig) {
    return coordinatorConfig.port && coordinatorConfig.storageUrl;
}

request(config.configUrl + '/api/v1/system/coordinator/config', function (error, response, body) {

    var coordinatorConfig = JSON.parse(body);
    if (!error && response.statusCode == 200 && validConfig(coordinatorConfig)) {
        config.port = coordinatorConfig.port;
        config.storageUrl = coordinatorConfig.storageUrl;

        server.listen(config.port, function () {
            console.log('Coordinator listening on port ' + server.address().port)
        });
    } else {
        throw "Failed to configure Coordinator!";
    }
});

