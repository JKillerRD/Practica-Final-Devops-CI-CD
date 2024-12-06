const fs = require('fs');

test('El archivo index.html existe', () => {
    expect(fs.existsSync('./index.html')).toBe(true);
});