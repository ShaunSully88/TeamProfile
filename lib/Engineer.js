const Employee = require('../lib/Employee.js');

class Engineer {
    constructor(name, email, id, profile) {
        this.name = name
        this.email = email
        this.id = id
        this.profile = profile
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getId() {
        return this.id
    }
    getProfile() {
        return this.profile
    }
}