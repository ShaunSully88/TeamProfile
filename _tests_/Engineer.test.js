const Engineer = require('../lib.Engineer.js');

test('get github profile', () => {
    const engineer = new Engineer('Charles', 25, 'meow@meow.com', 'Litterbox');
    const profile = engineer.getProfile();

    expect(profile).toBe('Litterbox');
});