const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Kat', 12345, 'kat@kat.com', 16);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
    const manager = new Manager('Kat', 12345, 'kat@kat.com', 16);
    expect(manager.getRole()).toBe('Manager');
})