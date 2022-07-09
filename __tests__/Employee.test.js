// Importing Employee Class Object
const Employee = require("../lib/Employee");

test("Create Employee...", () => {
    // Testing the Employee Class Object for name, id, and email.
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");

    expect(employee.name).toBe("Mike Jones");
    expect(employee.id).toBe("id");
    expect(employee.email).toBe("mikejones@who.com");
});
test("Checks to make sure saves employee name", () => {
    // Testing the Employee Class Object for "fetchName".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeName = employee.fetchName()

    expect(employeeName).toBe("Mike Jones");
});

test("Checks for employee 'Id'", () => {
    // Testing the Employee Class Object for "fetchId".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeId = employee.fetchId()

    expect(employeeId).toBe("id");
});
test("Checks for employee email.", () => {
    // Testing the Employee Class Object for "fetchEmail".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeEmail = employee.fetchEmail()

    expect(employeeEmail).toBe("mikejones@who.com");
});
test("Checks to make sure role is 'employee'", () => {
    // Testing the Employee Class Object for "fetchRole".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeRole = employee.fetchRole()

    expect(employeeRole).toBe("Employee");
});