module.exports = function (dir, ext, callback){
    var fs = require('fs');
    
    fs.readdir(dir, function(err, list){
        if(err) return callback(err);
        var r = [];
        for(var i=0; i<list.length; i++){
            if(list[i].indexOf("."+ext) != -1) r.push(list[i]);
        }
        return callback(null, r);
    });
}
