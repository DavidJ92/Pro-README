const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide credits (if any):",
    name: "credits",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "Provide badges (if any):",
    name: "badges",
  },
  {
    type: "input",
    message: "List features of your project:",
    name: "features",
  },
  {
    type: "input",
    message: "Provide contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide test instructions:",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownContent = generateMarkdown(data);
    writeToFile("README.md", markdownContent);
    console.log("README.md successfully generated!");
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

init();
