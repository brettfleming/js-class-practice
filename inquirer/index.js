const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "username",
        message: "enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "enter your email: "
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of the project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project if any where used: ",
        choices: [
            "Apache",
            "none"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    }
];