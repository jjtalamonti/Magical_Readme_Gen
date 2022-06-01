// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./utils/generateMarkdown')
// const readme = require('./utils./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What was the motivation for this project?',
        name: 'description1'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'description2'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'description3'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'description4'
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Were there any collaborators? If so list them and give a link to their github profile. If not leave blank.',
        name: 'credits_collaborators'
    },
    {
        type: 'input',
        message: 'Did you use any third party assests that require attribution? if so list the creators with their primary web presence.',
        name: 'credits_third_party_assets',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'questions_email',
    },
    {
        type: 'input',
        message: 'What is your github username',
        name: 'questions_github',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'Apache 2.0', 'Unlicense'],
        name: 'license',
    },
]
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            // console.log(response)
            return readme(response)
        })
        .then(response => {
            return generateReadme(response);
        })
        .catch(err => {
            console.log(err)
        })
}
//generates the user's readme and stores in a file named READMEGEN.md
const generateReadme = response => {
    fs.writeFile('READMEGEN.md', response, err => {
        if (err) {
            confirm.log(err);
            return;
        } else {
            console.log("Your Readme has been created under file name READMEGEN!")
        }
    })
}

init();