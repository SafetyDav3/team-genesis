// Importing Intern Class Object
const Intern = require("../lib/Intern");

test("Creates Intern...", () => {
    // Create a new Intern
    const intern = new Intern("Jerry Jones", 1, "jerryjones@who.com", "UWGB");

    expect(intern.name).toBe("Jerry Jones");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("jerryjones@who.com");
    expect(intern.school).toBe("UWGB");
});

test("Fetching School attended from 'Intern'.", () => {
    // Create a new Intern
    const intern = new Intern("Jerry Jones", 1, "jerryjones@who.com", "UWGB");
    const internSchool = intern.fetchSchool();

    expect(internSchool).toBe("UWGB");
});

test("Testing to make sure employee role is 'Intern'.", () => {
    // Create a new Intern
    const intern = new Intern("Jerry Jones", 1, "jerryjones@who.com", "UWGB");
    const internRole = intern.fetchRole();

    expect(internRole).toBe("Intern");
});