var filter = require('./06.1.js');

filter(process.argv[2], process.argv[3], function(err, data){
    // console.log(data);
    if(err) console.log(err);
    for(var i=0; i<data.length; i++){
        console.log(data[i]);
    }
});