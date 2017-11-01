var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
buffer = buffer.toString();
console.log(buffer.split('\n').length-1);