const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Todd', 12345, 'todd@todd.com', 'university');
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's role", () => {
    const intern = new Intern('Todd', 12345, 'todd@todd.com', 'university');
    expect(intern.getRole()).toBe('Intern');
})