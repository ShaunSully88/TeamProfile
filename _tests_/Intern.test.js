//linking to Intern.js page
const Intern = require('../lib/Intern.js');

//Because all initial info was fill out on Employee page, only one additional question needs to be asked for Intern

//function test for School
test("Intern's school", () => {
const intern = new Intern('Shaun', 8, '123@123.com', 'Carleton U');

expect(intern.internSchool).toEqual('Carleton U');
});

test("get Intern's school", () => {
    const intern = new Intern('Shaun', 8, '123@123.com', 'Carleton U');
    
    expect(intern.getSchool()).toBe('Carleton U');
    });

    test(" get Intern's role", () => {
        const intern = new Intern('Shaun', 8, '123@123.com', 'Carleton U');
        
        expect(intern.getRole()).toBe('Intern');
        });