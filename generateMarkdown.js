

function renderLicenseBadge(x) {
  console.log("Your All Done!")
    if ((JSON.stringify(x.license)) === JSON.stringify(["MIT"])){
  return ` 
  ## License
  
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></img></a>`
      
   }else{
      return``
    }
}

  


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

  To Install necessary dependencies, run the following command:
  
  ${data.installation}

  ## Usage

      ${data.usage}
  
  ## Technologies

      ${data.technologies}

  ## Contributors

  ${data.contributors}

  ## Questions/Contact

  <a href="https://github.com/${data.github}">GitHub Profile</a>
  <a href="mailto:${data.email}"> Email Me</a>
  
  



  `

}
  
  module.exports = generateMarkdown;
  