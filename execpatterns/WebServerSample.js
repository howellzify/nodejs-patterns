//Sample to startup a simple HTTP listener
//run Codenvy command Run Web SErver Sample or on your own local machine
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(9000);