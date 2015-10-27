 'use strict';

var port = process.env.PORT || 8125;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var addr = server.address();
    console.log(
        'Started to listen on %s:%s...',
        addr.address,
        addr.port
    );
});

server.on('message', function (message, remote) {
    console.log(
        '%s:%s >>> %s',
        remote.address,
        remote.port,
        message
    );
});

server.bind(port);
