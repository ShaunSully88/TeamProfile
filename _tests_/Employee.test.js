//linking to Employee.js page
const Employee = require('../lib/Employee.js');

//test function for name input
 test('employee name', () => {
     const employee = new Employee('Shaun', 8, '123@123.com');

     expect(employee.employeeName).toEqual('Shaun');
 });
 test('get employee name', () => {
    const employee = new Employee('Shaun', 8, '123@123.com');

    expect(employee.getName()).toBe('Shaun');
});

//test function for id input
 test('employee id', () => {
     const employee = new Employee('Angie', 21, '321@321.com');

     expect(employee.employeeId).toEqual(21);
 });
 test('get employee id', () => {
    const employee = new Employee('Angie', 21, '321@321.com');

    expect(employee.getId()).toBe(21);
});

//test function for email input
 test('employee email', () => {
     const employee = new Employee('Zuka', 9, 'bark@bark.com'); 
     expect(email.employeeEmail).toEqual('bark@bark.com');
 });
 test('get employee email', () => {
    const employee = new Employee('Zuka', 9, 'bark@bark.com'); 
    expect(email.getEmail()).toBe('bark@bark.com');
});

//test function for role input
test('employee role', () => {
    const employee = new Employee('Zuka', 9, 'bark@bark.com')
    expect(employee.employeeRole).toBe('')
});
test('get employee role', () => {
    const employee = new Employee('Zuka', 9, 'bark@bark.com')
    expect(employee.getRole()).toBe('')
});