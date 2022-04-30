//importing info from Employee page to build from
const Employee = require('../lib/Employee.js');

// creating Intern constructor function with addition of school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email)
    this.schoolName = schoolName;
    }
    getRole() {
        return 'Intern'
    }
   getSchool() {
       return this.schoolName;
   }
}
//exporting info, to be imported at index.js
module.exports = Intern;