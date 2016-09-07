var http = require('http');
var EventEmitter = require('events').EventEmitter;
var signaller = new EventEmitter();
var WebSocketServer = require('ws').Server;
var port = process.env.npm_package_config_port || 8888;
var server = require('http').createServer().listen(port);
var ws = new WebSocketServer({ server: server });

ws.on('connection', function(connection) {

  console.log('WebSocketServer connection');

  connection.on('message', function(data) {

    console.log()
    console.log('websocket message', new Date(), data);

    var parsed = JSON.parse(data);
    if(parsed.recipient && parsed.message) {
      return signaller.emit(parsed.recipient, parsed);
    }

    signaller.on(parsed.announceNick, function(message) {
      var json = JSON.stringify(message);
      console.log('websocket sending', json, 'to', parsed.announceNick);
      connection.send(json);
    });

    connection.on('close', function() {
      signaller.removeAllListeners(parsed.announceNick);
    });
  });
});

console.log('Signal server listening on port', port);
