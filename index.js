const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const generateHtml = require('./utils/generateHtml.js')

//quesiton prompt for Manager information followed by options to add employees or finish application
const ManagerData = questions = () => {
    return inquirer
    .prompt [(
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office Number?"
    }  
    )];
    addRole();
}

//If user wants to Add Engineer, run Engineer Data function

const EngineerData = questions = () => {
    return inquirer
    .prompt [(
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Engineer's office Number?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Engineer's GitHub Username?"
    }  
    )];

    addRole();
};

const InternData = questions = () => {
    return inquirer
    .prompt [(
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Intern's office Number?"
    },
    {
        type: 'input',
        name: 'school',
        message: "Where did the Intern go to school?"
    }  
   )];
   addRole();
};

// Prompted at end of each employee addition, user can select whether to
// add employee or finish app. All answers are moved to generateHtml page
const addRole = questions = () => {
    return inquirer
    .prompt [(
    {
        type: 'list',
        name: 'options',
        message: 'Would you like to add an Engineer, add an Intern, or finish the application?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish the application']
    }  
    )]

    .then (({ choice }) => {
    if (choice === 'Add an Engineer')  {
       return  EngineerData()
       .then(EngineerData => {
           const html = generateHtml(answers)
       });
    } else {
        init();
    };
    //If user wants to add Intern, run Intern Data function
    if (choice === 'Add an Intern') {
        return InternData()
        .then(InternData => {
            const html = generateHtml(answers)
        });
    } else {
        init();
    };
    //if user wants to finish application, run app init
    if (options.choices === 'Finish the Application') {
        init();
    }
});

// TODO: Create a function to write README file
    fs.writeFile('index.html', html, err => {
        if (err) throw err;
        console.log('Saved')
    }
  );
};

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })
};


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

