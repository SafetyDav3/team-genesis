// Create a new Employee Class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  fetchName() {
    return this.name;
  }
  fetchId() {
    return this.id;
  }
  fetchEmail() {
    return this.email;
  }
  fetchRole() {
    return "Employee";
  }
}

module.exports = Employee;
