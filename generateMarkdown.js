

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(x) {
  console.log(x.license)
    if ((JSON.stringify(x.license)) === JSON.stringify(["MIT"])){
  return ` 
  ## License
  
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></img></a>`
      
   }else{
      return``
    }
}

  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
//   function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
//   function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    
  return `
  # ${data.title}

  ${renderLicenseBadge(data)}

  ## Description

  ${data.description}

  ## Images

  
  ## Table of Content

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributors)

  * [Contact](#questions/contact)

  ## Installation

  To Install necessary dependencies,run the following command:
  
      ${data.installation}

  ## Usage

  ${data.usage}
  
  ## Technologies

  ${data.technologies}

  ## Contributors

  ${data.contributors}

  ## Questions/Contact

  <a href="https://github.com/${data.email}">GitHub Profile</a>
  <a href="mailto:${data.github}"> Email Me</a>
  
  



  `
  
  

  

  

}
  
  module.exports = generateMarkdown;
  