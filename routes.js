app.get('/', function (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});
