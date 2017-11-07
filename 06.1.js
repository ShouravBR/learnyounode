module.exports = function (dir, ext, callback){
    var fs = require('fs');
    var r = [];
    fs.readdir(dir, function(err, list){
        if(err) return callback(err);
            for(var i=0; i<list.length; i++){
                if(list[i].indexOf("."+ext) != -1) r.push(list[i]);
            }
    });
    return r;
}
