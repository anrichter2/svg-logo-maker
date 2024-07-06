const inquirer = require('inquirer')
const fs = require('fs')
const { createSVG } = require('./lib/svg.js')

const questions = [
    {
        type: "input",
        message: "What text do you want for the logo?",
        name: "text"
    },
    {
        type: "input",
        message: "What color do you want the text to be?",
        name: "colorText"
    },
    {
        type: "list",
        message: "What shape do you want for the logo?",
        choices: ["circle", "triangle", "square"],
        name: "shape"
    },
    {
        type: "input",
        message: "What color do you want for the shape?",
        name: "colorShape"
    }
];

inquirer
    .prompt(questions)
    .then(response => {
        console.log(response) // DELETE when done
        return fs.writeFile('logo.svg', createSVG(response), err =>
            err ? console.log(err) : console.log('Generated logo.svg')
        )
    })
    .catch((error) => {
        console.log('catch error', error);
        console.log('there was an error with inquirer')
    });