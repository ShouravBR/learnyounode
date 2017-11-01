var fs = require('fs');
fs.readdir(process.argv[2]+"/*."+process.argv[3], function(err, list){
    if(err) throw err;
    for(var i=0; i<list.length; i++){
        console.log(list[i]);
    }
});