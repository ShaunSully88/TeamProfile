
//Setting up basic Employee page, creating Employee as constuctor function
class Employee {
    constructor(name, id, email, role) {
        this.name = name,
        this.id = id,
        this.email = email
        this.role = role
    };

// returns input name
getName() {
    return this.name
};
//returns input id
getId() {
    return this.id
};
//returns input email
getEmail() {
    return this.email
};
//returns role in office, which determines which direction questions go
getRole() {
    return this.role
};

}
//exporting info, to be imported at index.js
module.exports = Employee;