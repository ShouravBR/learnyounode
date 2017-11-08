var net = require('net');
var date = new Date();
var server = net.createServer(function (socket) {
    var month = date.getMonth()+1;
    var day = date.getDate();
    if(month<10) month = "0"+month;
    if(day<10) day = "0"+day;
    socket.end(date.getFullYear()+'-'+month+'-'+day+" "
        +date.getHours()+":"+date.getMinutes()+"\n");
});
server.listen(process.argv[2]);  