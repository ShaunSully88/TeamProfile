//linking to Engineer.js page
const Engineer = require('../lib.Engineer.js');

//All quesitons asked on employee page, only one quesiton to ask Engineer

//function test for Github Profile
test('get github profile', () => {
    const engineer = new Engineer('Charles', 25, 'meow@meow.com', 'Litterbox');
    const profile = engineer.getProfile();

    expect(profile).toBe('Litterbox');
});