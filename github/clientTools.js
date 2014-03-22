function socketUpdate(type, data) {
  io.sockets.emit(type, { data: data });
}

function openToClient(err, result) {
  if(!err) {
    socketUpdate('openRequests', result);
  };
}

function closedToClient(err, result) {
  if(!err) {
    socketUpdate('closedRequests', result);
  }
}

exports.socketUpdate = socketUpdate;
exports.openToClient = openToClient;
exports.closedToClient = closedToClient;
