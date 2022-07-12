// Importing Engineer Class Object
const Engineer = require("../lib/Engineer");

test("Creates Engineer...", () => {
    // Create a new Engineer
    const engineer = new Engineer("Gary Jones", 1, "garyjones@who.com", "whoHub");

    expect(engineer.name).toBe("Gary Jones");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("garyjones@who.com");
    expect(engineer.github).toBe("whoHub");
});

test("Fetching Github profile from 'Engineer'.", () => {
    // Create a new Engineer
    const engineer = new Engineer("Gary Jones", 1, "garyjones@who.com", "whoHub");
    const engineerGithub = engineer.getGithub();

    expect(engineerGithub).toBe("whoHub");
});

test("Testing to make sure employee role is 'Engineer'.", () => {
    // Create a new Engineer
    const engineer = new Engineer("Gary Jones", 1, "garyjones@who.com", "whoHub");
    const engineerRole = engineer.getRole();

    expect(engineerRole).toBe("Engineer");
});