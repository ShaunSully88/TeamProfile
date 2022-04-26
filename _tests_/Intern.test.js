const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern.js');


test("Intern's school", () => {
const intern = new Intern('Shaun', 8, '123@123.com', 'Carleton U');
const school = intern.getSchool();

    expect(school).toEqual('Carleton U');
});