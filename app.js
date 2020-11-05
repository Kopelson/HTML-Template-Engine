const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamArr = [];

function addEmployee(){
    inquirer
        .prompt([
            {
                type: "list",
                message: "What kind of employee would you like to add",
                name: "employee",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                message: "What is the name of the employee?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the ID of the employee?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the email of the employee?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
                when: (answers) => answers.employee === "Manager"
            },
            {
                type: "input",
                message: "What is you Github URL?",
                name: "github",
                when: (answers) => answers.employee === "Engineer"
            },
            {
                type: "input",
                message: "What is the name of your School?",
                name: "school",
                when: (answers) => answers.employee === "Intern"
            },
            {
                type: "confirm",
                message: "Whould you like to add another employee?",
                name: "add"
            }

        ]).then(function(response){
            console.log(response);
            if(response.employee === "Manager"){
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                teamArr.push(manager);
            }
            if(response.employee === "Engineer"){
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                teamArr.push(engineer);
            }
            if(response.employee === "Intern"){
                const intern = new Intern(response.name, response.id, response.email, response.school);
                teamArr.push(intern);
            }
            console.log(teamArr);

            if(response.add){
                addEmployee()  
            } else {
                fs.writeFile(outputPath, render(teamArr), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            }
        })
} 

addEmployee();
