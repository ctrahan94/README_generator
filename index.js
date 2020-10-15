const inquirer = require("inquirer");


// array of questions for user
const questions = [ 
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "What do you need to know to use the application?",
    name: "usage"
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "ISC", "None"],
    name: "license"
  },
  {
    type: "input",
    message: "What does the user need to know to contribute to the project?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What command should be run to test?",
    default: "npm test",
    name: "tests"
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(answers => {
  console.log(answers);
  
})
}

// function call to initialize program
init();
