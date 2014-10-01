var lib = require('./lib');


var args = process.argv.slice(2);
for(var i=0; i<args.length; i++) {
  console.log(args[i], lib.decrypt(args[i]));
}
