
//Setting up basic Employee page, creating Employee as constuctor function
class Employee {
    constructor(name, id, email, role) {
        this.employeeName = employeeName,
        this.employeeId = employeeId,
        this.employeeEmail = employeeEmail
        this.employeeRole = employeeRole
    };

    getName() {
        return this.employeeName
    }

    getId() {
        return this.employeeId
    }
    getEmail() {
        return this.employeeEmail
    }
    getRole() {
        return this.employeeRole
    }

};
//exporting info, to be imported at index.js
module.exports = Employee;