const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// employee:  name  id  email  getName()   getId() getEmail() getRole()
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
//maanager: officeNumber,
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;        
    }   
}

module.exports = Manager;