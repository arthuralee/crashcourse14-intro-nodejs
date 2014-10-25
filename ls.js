var fs = require('fs');

var files = fs.readdirSync('.');

for (var i in files) {
  console.log(files[i]);
}