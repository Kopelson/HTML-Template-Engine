//require Employee class
const Employee = require("./Employee");
//initializes the class Intern that extends Employee
class Intern extends Employee{
    //adds the constructor of the class
    constructor(name, id, email, school){
        //this grabs the info from the extended class of Employee
        super(name, id, email);
        //this assigns and stores a school number for the Intern class
        this.school = school;
    }
    //this initializes a method for the Intern class 
    getSchool(){
        //this returns a school name
        return this.school;
    }
}
//this exports Intern class
module.exports = Intern;