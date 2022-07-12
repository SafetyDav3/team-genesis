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
    // Testing the Employee Class Object for "getName".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeName = employee.getName()

    expect(employeeName).toBe("Mike Jones");
});

test("Checks for employee 'Id'", () => {
    // Testing the Employee Class Object for "getId".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeId = employee.getId()

    expect(employeeId).toBe("id");
});
test("Checks for employee email.", () => {
    // Testing the Employee Class Object for "getEmail".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeEmail = employee.getEmail()

    expect(employeeEmail).toBe("mikejones@who.com");
});
test("Checks to make sure role is 'employee'", () => {
    // Testing the Employee Class Object for "getRole".
    const employee = new Employee("Mike Jones", "id", "mikejones@who.com");
    const employeeRole = employee.getRole()

    expect(employeeRole).toBe("Employee");
});