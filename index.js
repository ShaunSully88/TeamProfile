const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');

const employeeData = () => {
    return inquirer
    .prompt (
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    {
        type: 'input',
        name: 'role',
        message: "What is the employee's role?"
    }

    
    )
}