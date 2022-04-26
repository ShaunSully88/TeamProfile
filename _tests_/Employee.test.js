const Employee = require('../lib/Employee.js');

 test('get employee name', () => {
     const employee = new Employee('Shaun', 8, '123@123.com');
     const name = employee.getName();

     expect(name).toBe('Shaun');
 });

 test('get employee id', () => {
     const employee = new Employee('Angie', 21, '321@321.com');
     const id = employee.getId();

     expect(id).toBe(21);
 });

 test('get employee email', () => {
     const employee = new Employee('Zuka', 9, 'bark@bark.com');

     expect(email).toBe('bark@bark.com');
 });

 test('get employee role', () => {
     const employee = new Employee('Bogey', 7, 'bite@bite.com')
     const role = employee.getRole();

     expect(role).toBe('Employee');
 });