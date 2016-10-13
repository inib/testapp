var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
  res.send('Git webhook successful! 6666 dies the job');
});

var server = app.listen(6666, function() {
 
console.log('Server listening');
 
});