//importing info from Employee page to build from
const Employee = require('../lib/Employee.js');

// creating Intern constructor function with addition of school
class Intern {
    constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }
    getName() {
        return this.name
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email
    }
    //returns school input
    getSchool() {
        return this.school
    }
};
//exporting info, to be imported at index.js
module.exports = Intern;