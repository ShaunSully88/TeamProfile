//importing data from Employee page to build from
const Employee = require('../lib/Employee.js');

//created new Manager constructor function with addition of Office Number
class Manager extends Employee{
    constructor(name, email, id, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber    
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

//exportin info, to be imported at index.js
module.exports = Manager
