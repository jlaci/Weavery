var express = require('express')
var sockets = require('signal-master/sockets')

var app = express()
var server = app.listen(8080)
sockets(server, {})
