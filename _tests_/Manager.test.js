//linknig to Manager.js page
const Manager = require('./lib/Manager.js');

//All info already answered on Employee page, only one quesiton to ask Manager

//function test for Office Number
test('gets office number', () => {
    const Manager = new Manager('Henry', 77, 'litter@litter.com', 666)
    expect(manager.managerOfficeNumber).toEqual(666);
});

test('get Managers office number', () => {
    const Manager = new Manager('Henry', 77, 'litter@litter.com', 666)
    expect(manager.getOfficeNumber()).toBe(666);
});

test('gets Manager role', () => {
    const Manager = new Manager('Henry', 77, 'litter@litter.com', 666)

    expect(manager.getRole()).toBe('Manager');
});