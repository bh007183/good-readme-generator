var inquirer = require("inquirer")
var fs = require("fs")
const Choices = require("inquirer/lib/objects/choices");
var generateMarkdown = require("./generateMarkdown")


inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?"
    },
    {
        name: "contributors",
        type: "input",
        message: "Who were the creators of this project?"
    },
    {
        name: "description",
        type: "input",
        message: "Describe the project."
    },
    {
        name: "installation",
        type: "input",
        message: "To Install necessary dependencies,run the following command:"
    },
    {
        name: "technologies",
        type: "input",
        message: "What technologies were used in this program? What resources did you use?"
    },
    {
        name: "usage",
        type: "input",
        message: "How do you use this program?"
    },
    {
        name: "license",
        type: "checkbox",
        message: "Select what license you application is under.",
        choices: ["None", "MIT"]
    },
    {
        name: "github",
        type: "input",
        message: "Enter github username.",
        
    },
    {
        name: "email",
        type: "input",
        message: "Enter email address.",
    },
]).then(function(response){
    fs.writeFile("README.md", generateMarkdown(response), function(err){
        if(err){
            console.log("error")
        }
    })
})


