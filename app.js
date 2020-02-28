const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

const managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    }, 
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your managers email?",
        name: "email"
    },   
    {
        type: "input",
        message: "What is your manager's office number",
        name: "officeNumber"
    }   

]

const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
	{
        type: "input",
        message: "What is your enginner's ID?",
        name: "ID"
    },
	{
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
	{
        type: "input",
        message: "What is your engineer's GitHub user name?",
        name: "github"
    }
		
];

const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
	{
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
    },
	{
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
	{
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
]

        // {
        // type: "list",
        // message: "Which type of team member would you like to add?",
        // name:
        // choices: [
        //     "engineer",
        //     "intern",
        //     "I don't want to add any more team members"
        // ]
        // }

const init = () => {
    inquirer.prompt(managerQuestions).then(function(answers){})

};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. The fs npm package may have methods to check if a directory exists, and they
// may also have methods to create a directory that doesn't...

init();


