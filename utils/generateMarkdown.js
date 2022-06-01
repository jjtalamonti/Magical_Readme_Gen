const generateMarkdown = response => {
    return `# ${response.title}
![Github license](http://img.shields.io/badge/license-${response.license}-blue.svg)

## Description
${response.description1}
${response.description2}
${response.description3}
${response.description4}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributers](#contributers)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
- ${response.installation}

## Usage
- ${response.usage}

## Contributing
- ${response.credits_collaborators}

- ${response.credits_third_party_assets}

## Tests
- 
## Questions

- If you have further questions you can contact me at: ${response.questions_email}

- Follow this link to my repo if you would like to see more projects that I have created: ${response.questions_github} 

## License
- This project is licensed under ${response.license}`;
}

module.exports = generateMarkdown;