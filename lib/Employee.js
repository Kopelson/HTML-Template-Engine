//initializes the class Employee
class Employee {
    //adds the constructor of the class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
    //adds a method to Employee class
    getName(){
        //returns an employee name
        return this.name;
    }
    //adds a method to Employee class
    getId(){
        //returns an employee id
        return this.id;
    }
    //adds a method to Employee class
    getEmail(){
        //returns an employee email
        return this.email;
    }
    //adds a method to Employee class
    getRole(){
        //returns the name of the class being created
        return this.constructor.name;
    }
}
//thi exports Employee class
module.exports = Employee;