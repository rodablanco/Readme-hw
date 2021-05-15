
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##License:
  [![License](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/]
  ## table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#Credits)
  - [License](#License)
  
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.tesing}
  ##Contact Information:
  - Github: [${data.gitub}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)
  `;
}

module.exports = generateMarkdown;
