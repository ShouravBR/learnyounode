var http = require('http');
var port = Number(process.argv[2]);
var map = require('through2-map');
var server = http.createServer(function (req, res) {  
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var url = require('url').parse(req.url, true);
    if(url.pathname == '/api/parsetime'){
        var date = new Date(url.query['iso']);
        var json = "{\"hour\": "+date.getHours()+",\"minute\": "+date.getMinutes()+", \"second\": "+date.getSeconds()+"}";
        res.end(json);
    }else if(url.pathname == '/api/unixtime'){
        var date = new Date(url.query['iso']);
        var json = "{\"unixtime\": "+date.getTime()+"}";
        res.end(json);
    }
});
server.listen(port);