var http = require('http');
var balance = require('./balance');


http.createServer(function(req, res) {
 res.write(balance());
 res.end();
}).listen(3000);
