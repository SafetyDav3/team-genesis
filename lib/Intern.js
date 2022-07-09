const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  fetchSchool() {
    return this.school;
  }
  fetchRole() {
    return "Intern";
  }
}

module.exports = Intern;
