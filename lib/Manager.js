//require Employee class
const Employee = require("./Employee");
//initializes the class Manager that extends Employee
class Manager extends Employee {
    //adds the constructor of the class
    constructor(name, id, email, officeNumber){
        //this grabs the info from the extended class of Employee
        super(name, id, email);
        //this assigns and stores an office number for the Manager class
        this.officeNumber = officeNumber;
    }
    //this initializes a method for the Manager class
    getOfficeNumber(){
        //this returns an office number
        return this.officeNumber;
    }
}
//this exports Manager class
module.exports = Manager;