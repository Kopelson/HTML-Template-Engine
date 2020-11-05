//require Employee class
const Employee = require("./Employee");
//initializes the class Engineer that extends Employee
class Engineer extends Employee{
    //adds the constructor of the class
    constructor(name, id, email, github){
        //this grabs the info from the extended class of Employee
        super(name, id, email);
        //this assigns and stores a github URL for the Intern class
        this.github = github;
    }
    //initializes a method for the Engineer class
    getGithub(){
        //this returns a github URL
        return this.github;
    }
}
//this exports Engineer class
module.exports = Engineer;