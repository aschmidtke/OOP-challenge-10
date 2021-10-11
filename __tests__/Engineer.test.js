const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Janet', 12345, 'janet@janet.com', 'github.com/janet' );
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Janet', 12345, 'janet@janet.com', 'github.com/janet' );
    expect(engineer.getRole()).toBe('Engineer');
});