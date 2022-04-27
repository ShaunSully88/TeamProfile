//linking to Employee.js page
const Employee = require('../lib/Employee.js');

//test function for name input
 test('get employee name', () => {
     const employee = new Employee('Shaun', 8, '123@123.com');
     const name = employee.getName();

     expect(name).toBe('Shaun');
 });
//test function for id input
 test('get employee id', () => {
     const employee = new Employee('Angie', 21, '321@321.com');
     const id = employee.getId();

     expect(id).toBe(21);
 });
//test function for email input
 test('get employee email', () => {
     const employee = new Employee('Zuka', 9, 'bark@bark.com');
     const email = employee.getEmail();

     expect(email).toBe('bark@bark.com');
 });
//test function for role input
 test('get employee role', () => {
     const employee = new Employee('Bogey', 7, 'bite@bite.com', 'Top Dog')
     const role = employee.getRole();

     expect(role).toBe('Employee');
 });