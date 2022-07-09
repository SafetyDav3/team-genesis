const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  fetchGithub() {
    return this.github;
  }
  fetchRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
