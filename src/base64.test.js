const base64 = require('./base64.js');

test("base64.encode 'abcdefg' to be equal to 'YWJjZGVmZw=='", ()=> {
    expect(base64.encode('abcdefg')).toBe('YWJjZGVmZw==')
});


test("base64.decode 'YWJjZGVmZw==' to be equal to 'abcdefg'", ()=> {
    expect(base64.decode('YWJjZGVmZw==')).toBe('abcdefg')
});