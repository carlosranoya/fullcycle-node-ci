const base64 = require('./base64.js');

test("base64.encode 'abcdefg' to be equal to 'YWJjZGVmZw=='", ()=> {
    expect(base64.encode('abcdefg')).toBe('YWJjZGVmZw==')
});


test("base64.decode 'YWJjZGVmZw==' to be equal to 'abcdefg'", ()=> {
    expect(base64.decode('YWJjZGVmZw==')).toBe('abcdefg')
});


const longString =  '123456789123456789qwertyuioqwertyuioasdfghjklasdfghjklzxcvbnm,.zxcvbnm,.' + 
                    'QWERTYUIOQWERTYUIOASDFGHJKLASDFGHJKLZXCVBNM,.ZXCVBNM,.' +
                    '123456789123456789qwertyuioqwertyuioasdfghjklasdfghjklzxcvbnm,.zxcvbnm,.' +
                    'QWERTYUIOQWERTYUIOASDFGHJKLASDFGHJKLZXCVBNM,.ZXCVBNM,.' +
                    '123456789098765432qwertyuiopoiuytrewasdfghjkl;lkjhgfdszxcvbnm,.,mnbvcxza';


test("long string test", ()=> {
    let encoded = base64.encode(longString);
    let decoded = base64.decode(encoded);
    expect(decoded).toBe(longString);
});

test("simple string", ()=> {
    let encoded = base64.encode("12345678");
    let decoded = base64.decode(encoded);
    expect(decoded).toBe("12345678");
});

test("simple string", ()=> {
    let decoded = base64.decode("12345678");
    let encoded = base64.encode(decoded);
    expect(encoded).toBe("12345678");
});