app = require('express')()
, server = require('http').createServer(app)
, io = require('socket.io').listen(server);

server.listen(3000);

require('./routes.js');

require('./github/connect.js');

clientTools = require('./github/clientTools.js');

io.sockets.on('connection', function (socket) {
  clientTools.socketUpdate('');
  socket.emit('news', { hello: 'world' });
});
