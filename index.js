'use strict';

var express       = require('express');
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 7777;
var app           = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/', function(req, res) {
  res.send('ok');
});

app.listen(port, function() {
  console.log('Express HTTP server listening on port ' + port + '!');
});
