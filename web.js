var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 5000;
var data = new Buffer(fs.readFileSync('index.html'));

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(data.toString('utf-8'));
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
