//initialize required classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//initialize required dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//initialize file path for generated html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//initialize required html render
const render = require("./lib/htmlRenderer");
//initialize team array that stores new employee objects to be passed to the render function
const teamArr = [];
//this function queries users on adding different employees to their team tp generate a team html page
function addEmployee(){
    //this calls inquirer
    inquirer
        //this uses the prompt method of inquirer
        .prompt([
            {
                //this lists out options for what type of employee a user wants to add to the team
                type: "list",
                message: "What kind of employee would you like to add",
                name: "employee",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                //this allows the user to input the name of the employee their adding
                type: "input",
                message: "What is the name of the employee?",
                name: "name",
            },
            {
                //this allows the user to input an ID of the employee their adding
                type: "input",
                message: "What is the ID of the employee?",
                name: "id"
            },
            {
                //this allows the user to input an email of the employee their adding
                type: "input",
                message: "What is the email of the employee?",
                name: "email"
            },
            {
                //this allows the user to input an office number of a manager their adding
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
                when: (answers) => answers.employee === "Manager"
            },
            {
                //this allows the user to input a github url of an engineer their adding
                type: "input",
                message: "What is you Github URL?",
                name: "github",
                when: (answers) => answers.employee === "Engineer"
            },
            {
                //this allows the user to input a school name of an intern their adding
                type: "input",
                message: "What is the name of your School?",
                name: "school",
                when: (answers) => answers.employee === "Intern"
            },
            {
                //this allows the user to continue adding employees to their team or not
                type: "confirm",
                message: "Whould you like to add another employee?",
                name: "add"
            }
            //this is the callback function that uses the responses that was just given by the user
        ]).then(function(response){
            //this checks the type of employee that was chosen to create a new instance of that type of employee 
            if(response.employee === "Manager"){
                //this creates a new instance of a Manager
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                //this pushes the new instance of a Manager to the teamArr
                teamArr.push(manager);
            }
            //this checks the type of employee that was chosen to create a new instance of that type of employee 
            if(response.employee === "Engineer"){
                //this creates a new instance of a Engineer
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                //this pushes the new instance of a Engineer to the teamArr
                teamArr.push(engineer);
            }
            //this checks the type of employee that was chosen to create a new instance of that type of employee 
            if(response.employee === "Intern"){
                //this creates a new instance of a Intern
                const intern = new Intern(response.name, response.id, response.email, response.school);
                //this pushes the new instance of a Intern to the teamArr
                teamArr.push(intern);
            }
            //this checks to see if the user wants to add another employee
            if(response.add){
                //this runs this function again if true
                addEmployee()  
            } else {
                //this writes a new file "team.html" to the output folder of the rendered html of the objects in the teamARR
                fs.writeFile(outputPath, render(teamArr), (err) => {
                    //this throws an error if there is an issue with writing a file
                    if (err) throw err;
                    //this tells the user the file has been saved
                    console.log('The file has been saved!');
                });
            }
        })
} 
//this initializes the adding of employees function
addEmployee();
