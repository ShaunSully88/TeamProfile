//linknig to Manager.js page
const Manager = require('./lib/Manager.js');

//All info already answered on Employee page, only one quesiton to ask Manager

//function test for Office Number
test('gets office number', () => {
    const Manager = new Manager('Henry', 77, 'litter@litter.com', 666)
    const officeNumber = manager.getOfficeNumber();

    expect(officeNumber).toBe(666);
});