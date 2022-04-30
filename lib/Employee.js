
//Setting up basic Employee page, creating Employee as constuctor function
class Employee {
    constructor(name, id, email, role) {
        this.name = name,
        this.id = id,
        this.email = email
        this.role = role
    };

//exporting info, to be imported at index.js
module.exports = Employee;