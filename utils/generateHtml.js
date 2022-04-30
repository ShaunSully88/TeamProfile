const fs = require('fs');

function renderEmployeeInfo(employee) {
    if (employee === 'Manager') {
        return (employeeName, id, email, officeNumber)
    }
    if (employee === 'Engineer') {
         return (employeeName, id, email, officeNumber, github)
    }
    if (employee === 'Intern') {
        return (employeeName, id, email, officeNumber, school)
    }    
};

function generateHtml(data) {
    return `# ${data.employeeName}

    Id: ${data.id}

    Email: ${data.email}

    Office Number: ${data.officeNumber}`

    if (github === '') return `
    GitHub Profile: ${data.github}`

    if (school === '') return `
    School: ${data.school}`

};






//module.exports = generateHtml;