const Employee = require('../lib/Employee.js');

class Intern {
    constructor(name, id, email, school) {
    this.name = name;
    this.school = school;
    this.id = id;
    this.email = email;
    }
    getName() {
        return this.name
    };
    getId() {
        return this.getId;
    };
    getEmail() {
        return this.email
    }
    getSchool() {
        return this.school
    }
};

module.exports = Intern;