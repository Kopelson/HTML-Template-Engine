# HTML Template Engine
## Description

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. This project is focused on building a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, OOP (object oriented programming) uses tests to add confidence that each peice of code is working as expected.

## Overview

![teamhtml](https://user-images.githubusercontent.com/57735283/98418633-2ff86f00-2038-11eb-82ec-9752b1b78b30.PNG)


## Instructions

* [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) is used to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* This app runs as a Node CLI to gather information about each employee.
## node app.js

### Manager
![manager](https://user-images.githubusercontent.com/57735283/98419407-dbee8a00-2039-11eb-9761-2c25ff82ec24.gif)

### Engineer
![engineer](https://user-images.githubusercontent.com/57735283/98419418-e1e46b00-2039-11eb-9aed-dcc1280faa7c.gif)

### Intern
![intern](https://user-images.githubusercontent.com/57735283/98419422-e446c500-2039-11eb-8c8d-adfd32d5cb4d.gif)

### Saves to output/team.html

![saved](https://user-images.githubusercontent.com/57735283/98419429-e6108880-2039-11eb-85a7-cd96f7baac3b.gif)

In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

There are also unit tests that test each necessary class.

Remember, you can run the tests at any time with `npm run test` <br>

![test](https://user-images.githubusercontent.com/57735283/98418642-34248c80-2038-11eb-9fd7-7e78afa699dc.gif)


### Classes
The project has these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` also has:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` also has:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` also has:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The user is prompted to build an engineering team. An engineering
team consists of a managers, engineers, and interns.

### Roster output

This project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member is displayed the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Credit
* NPM for required packages
* Inquirer for CLI user inputs
* Node for file system packages, path packages, and runing a command line application
* Trilogy Education Services for project setup

## Badges
<a href="https://img.shields.io/badge/HTML-16.3%25-red"><img alt="HTML usage" src="https://img.shields.io/badge/HTML-16.325-red"></a> <a href="https://img.shields.io/badge/JavaScript-83.7%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-83.7%25-yellow"></a> <a href="https://img.shields.io/badge/Frameworks-Bootstrap-blue"><img alt="Bootstrap framework" src="https://img.shields.io/badge/Frameworks-Bootstrap-blue"></a> <a href="https://img.shields.io/badge/Backend-Node.js-green"><img alt="Node.js" src="https://img.shields.io/badge/Backend-Node.js-green"></a>
