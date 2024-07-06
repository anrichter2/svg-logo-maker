const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: "input",
        message: "What text do you want for the logo?",
        name: text
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
]

inquirer
    .prompt(questions)
    .then(response => {
        fs.writeFile('logo.svg', response, err =>
            err ? console.log(err) : console.log('Generated logo.svg')
        )
    })