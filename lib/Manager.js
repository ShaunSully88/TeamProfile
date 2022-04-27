//importing data from Employee page to build from
const Employee = require('../lib/Employee.js');

//created new Manager constructor function with addition of Office Number
class Manager {
    constructor(name, email, id, officeNumber) {
        name = this.name
        email = this.email
        id = this.id
        officeNumber = this.officeNumber
    }
    getName() {
        return this.name
    };
    getEmail() {
        return this.email
    };
    getId() {
        return this.id
    };
    getOfficeNumber() {
        return this.officeNumber
    };
;}
//exportin info, to be imported at index.js
module.exports = Manager
