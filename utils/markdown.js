function generateReadme(response) {
    return `
<h1 ${response.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)<br />


## Description
${response.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
![badge](https://img.shields.io/badge/license-${response.license})
<br />

This application is covered by the ${response.license} license. 

## Contributing
${response.contributing}

## Tests
${response.tests}
`;
}