const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generatePage = require('./src/page-template.js')
const employeeArray = [];

const newManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: "What is the name of this team's manager?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager (name, id, email, officeNumber);
        console.log(manager);
        employeeArray.push(manager);
    })
}

const newEmployee = () => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `)
   
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email?"
        },
        {
            when: (input) => input.role === "Engineer",
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username?"
        },
        {
            when: (input) => input.role === "Intern",
            type: "input",
            name: "school",
            message: "What school does the Intern go to?"
        },
        {
            type: 'confirm',
            name: 'moreEmployees',
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(employeeInfo => {
        let {role, name, id, email, github, school, moreEmployees} = employeeInfo;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        employeeArray.push(employee);

       if (moreEmployees) {
            return newEmployee(employeeArray);
        } else {
            return employeeArray;
        }
    });
   
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Team Profile Generated! Check out index.html to see your team profile!')
        }
    })
};
newManager()
.then(newEmployee)
.then(employeeArray => {
    return generatePage(employeeArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});