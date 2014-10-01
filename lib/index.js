// Dependencies
var crypto = require('crypto');
// Configuration
if(typeof process.env.MASTER_KEY === 'undefined') {console.log('MASTER_KEY environment variable is required.');process.exit(1);}
var MASTER_KEY = process.env.MASTER_KEY;


module.exports = {
  
  encrypt: function encrypt(data) {
    var cipher = crypto.createCipher('aes-256-cbc',MASTER_KEY);
    var crypted = cipher.update(data,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
  },
  
  decrypt: function decrypt(data) {
    var decipher = crypto.createDecipher('aes-256-cbc',MASTER_KEY);
    var decrypted = decipher.update(data,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
  
};
