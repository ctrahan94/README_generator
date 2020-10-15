function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [license](#license)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
      
      This project is licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [installation](#installation)
* [usage](#usage)
${renderLicenseLink(data.license)}
* [contributing](#contributing)
* [test](#tests)
* [questions](#questions)

To install necessary dependencies run the following command

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests
To run test run the following command:
\'\'\'
${data.tests}
\'\'\'

## Questions
If you have any questions about the repo contact me directly at ${data.email}.
You can find more of my work at [${data.username}](https://github.com/${
    data.username
  }).

`;
}

module.exports = generateMarkdown;
