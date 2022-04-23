const base64 = require('./src/base64.js');

// console.log(process.argv);

let word = 'abcdefg';

if (process.argv.length > 2) {
    word = process.argv[2];
}

let encoded = base64.encode(word);

console.log("encode('" + word + "') ==> " + encoded);

let decoded = base64.decode(encoded);

console.log("decode('" + encoded + "') ==> "+ decoded);