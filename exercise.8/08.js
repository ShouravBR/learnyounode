var http = require('http');
http.get(process.argv[2], function(res){
    res.setEncoding('utf8');
    var msg = '';
    res.on("data", function(data){
        msg += data;
    });
    res.on("error", function(err){
        console.error(err);
    });
    res.on("end", function(){
        console.log(msg.length);
        console.log(msg);
    });
})