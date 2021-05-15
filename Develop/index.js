// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            //validate property to check that the user provided a value
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can users contribute to this project?',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
    
        {
            //list of license
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of these'],
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'test',
            mesage: 'How does the user test this project?',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'git',
            message: 'Github username:',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            name: 'e-mail',
            message: 'E-mail:',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
       
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
