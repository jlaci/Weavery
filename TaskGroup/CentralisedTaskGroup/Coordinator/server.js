#!/usr/bin/env node
'use strict';

var server = require('http').createServer();
var url = require('url');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server });
var express = require('express');
var app = express();
var config = require('./config');


app.use(function (req, res) {
    res.send({ msg: "hello" });
});

wss.on('connection', function connection(ws) {
    var location = url.parse(ws.upgradeReq.url, true);
    console.log("WS connection to: " + location.path);

    if(location.path == '/client') {
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });
    } else {
        console.log('Unknown endpoint! (' + location.path + ')');
        ws.close();
    }
});

server.on('request', app);
server.listen(config.port, function () { console.log('Coordinator listening on port ' + server.address().port) });
