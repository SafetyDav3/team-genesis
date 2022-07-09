const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  fetchOfficeNumber() {
    return this.officeNumber;
  }
  fetchRole() {
    return "Manager";
  }
}

module.exports = Manager;
