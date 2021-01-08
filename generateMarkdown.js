

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(x) {
//     if ((JSON.stringify(x.license)) === ["MIT"]){
    
//       return `${![NPM]("https://img.shields.io/npm/l/MIT?style=plastic")}`
      
//    }
//     if (x.license === "GPL"){
//       return `![Eclipse]("https://img.shields.io/eclipse-marketplace/l/GPL")`
      
//     // }else{
//     //   return`"`
//     // }
// }

  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
//   function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
//   function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    // renderLicenseBadge(data)
  return `
  # ${data.title}

  ## License
  ${![data.license]("https://img.shields.io/badge/license-MIT-green.svg")}
  ## Description

  ${data.description}
  
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

  ${data.email}
  ${data.github}
  
  



  `
  
  

  

  

}
  
  module.exports = generateMarkdown;
  