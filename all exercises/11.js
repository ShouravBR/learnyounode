var http = require('http');
var port = process.argv[2];
var file = process.argv[3];
var server = http.createServer(function (req, res) {  
    var fs = require('fs');
    fs.createReadStream(file).pipe(res);
});
server.listen(port);