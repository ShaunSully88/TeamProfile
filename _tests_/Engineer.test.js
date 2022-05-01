//linking to Engineer.js page
const Engineer = require('../lib/Engineer.js');

//All quesitons asked on employee page, only one quesiton to ask Engineer

//function test for Github Profile
test('get github profile', () => {
    const engineer = new Engineer('Charles', 25, 'meow@meow.com', 'Litterbox');

    expect(engineer.engineerProfile).toEqual('Litterbox');
});

test('get Engineers github profile', () => {
    const engineer = new Engineer('Charles', 25, 'meow@meow.com', 'Litterbox');

    expect(engineer.getProfile()).toBe('Litterbox');
});

test("get Engineer's role", () => {
    const engineer = new Engineer('Charles', 25, 'meow@meow.com', 'Litterbox');

    expect(engineer.getRole()).toBe('Engineer');
});