// Function to return a license badge based on the license type
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return "";
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license) {
    return `[${license} License](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

${data.badges}

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

${data.features}

## How to Contribute

${data.contribution}

## Tests

${data.tests}

## Questions

For additional questions, please contact [GitHub: ${data.github}](https://github.com/${data.github}) or email at ${data.email}.

`;
}

module.exports = generateMarkdown;
