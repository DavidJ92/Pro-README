// Import necessary modules
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

// Define an array of questions to be asked to the user
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

// Initialize the process
function init() {
  // Prompt the user with the defined questions
  inquirer.prompt(questions).then((data) => {
    // Generate Markdown content using user responses
    const markdownContent = generateMarkdown(data);
    
    // Write the generated Markdown content to a file named "README.md"
    writeToFile("README.md", markdownContent);
    
    // Log a success message to the console
    console.log("README.md successfully generated!");
  });
}

// Function to write content to a file
function writeToFile(fileName, data) {
  // Use fs.writeFile to write content to the specified file
  fs.writeFile(fileName, data, (err) => {
    // If an error occurs during writing, log the error to the console
    if (err) {
      console.error(err);
    }
  });
}

// Start the initialization process
init();
