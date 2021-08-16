// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const markDown = require("./utils/markdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Name your Project.."
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your Project."
    },
    {
        type: "input",
        name: "Instalation",
        message: "How should we instal your Project."
    },
    {
        type: "input",
        name: "usage",
        message: "How should we use your Project."
    }, {
        type: "list",
        name: "license",
        message: "Please select your license.",
        choices: [
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2-clause license",
            "BSD 3-clause ",
            "BSD 3-clause Clear license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License",
            "GNU Affero General Public License",
            "GNU General Public License family",
            "GNU General Public License",
            "GNU General Public License",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License ",
            "GNU Lesser General Public License ",
            "ISC",
            "LaTeX Project Public License",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License",
            "Open Software License",
            "PostgreSQL License",
            "SIL Open Font License",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License"
        ]
    }, {
        type: "input",
        name: "contribution",
        message: "Please list other contributors if any."
    }, {
        type: "input",
        name: "questions",
        message: "Please state how we can contact you for questions."
    }, {
        type: "input",
        name: "user",
        message: "Please state your github username."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);

}

// Function call to initialize app
init();
