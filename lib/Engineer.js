const Employee = require('../lib/Employee.js');

class Engineer extends Employee{
    constructor(name, email, id, profile) {
        super(name, id, email)
        this.profile = profile
    }
    getRole() {
        return 'Engineer'
    }
    getProfile() {
        return this.Profile
    }
}

module.exports = Engineer;