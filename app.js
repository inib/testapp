var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
  res.send('Git webhook successful!');
});

var server = app.listen(666, function() {
 
console.log('Server listening');
 
});