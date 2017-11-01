var fs = require('fs');
fs.readFile(process.argv[2], function(err, buffer){
    if(err) throw err;
    var buffer = buffer.toString();
    console.log(buffer.split('\n').length-1);
});
