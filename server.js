// ---------- Init app ----------
var express = require('express');
var app = express();


// ---------- Settings ----------
app.use(express.static(__dirname + '/client'));

// ---------- Routes ----------
app.get('/', function(req, res) {
  res.sendfile('views/index.html');
});


// ---------- Server ----------
var server = app.listen(process.env.PORT, process.env.IP);