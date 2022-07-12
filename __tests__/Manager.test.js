// Importing Manager Class Object
const Manager = require("../lib/Manager");

test("Creates Manager...", () => {
    // Create a new Manager
    const manager = new Manager("Barry Jones", 1, "barryjones@who.com", 8);

    expect(manager.name).toBe("Barry Jones");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("barryjones@who.com");
    expect(manager.officeNumber).toBe(8);
});

test("Fetching Office Number from 'Manager'.", () => {
    // Create a new Manager
    const manager = new Manager("Barry Jones", 1, "barryjones@who.com", 8);
    const managerOfficeNum = manager.getOfficeNumber();

    expect(managerOfficeNum).toBe(8);
});

test("Testing to make sure employee role is 'Manager'.", () => {
    // Create a new Manager
    const manager = new Manager("Barry Jones", 1, "barryjones@who.com", 8);
    const managerRole = manager.getRole();

    expect(managerRole).toBe("Manager");
});