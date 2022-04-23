const base64 = require('./src/base64.js');

let encoded = base64.encode('abcdefg');

console.log("encode('abcdefg') ==> " + encoded);

let decoded = base64.decode(encoded);

console.log("decode('" + encoded + "') ==> "+ decoded);