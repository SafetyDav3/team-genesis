// Dependencies 
import inquirer from 'inquirer';
import fs from 'fs';

// Employee models
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";

// Internal dependencies 
import html from "./src/generateHTML.js";

// Path for content
import path from "path";
// const distPath = path.resolve(__dirname, "dist");
const createHTML = path.join("./dist/index.html");

// Array to save generated employees
const employees = [];

// Prompt to add new Manager to the system
const promptManager = ()=> {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Managers name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Managers ID number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Managers email address: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter Managers office number: ",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(manager);
      newEmployee();
    });
}

// Prompt to add new Engineer to the system
const promptEngineer = ()=> {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the Engineer's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Engineer's ID number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the Engineer's email address: ",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the Engineer's GitHub profile name: ",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
      newEmployee();
    });
}

// Prompt to add new Intern to the system
const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the Intern's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Intern's ID number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the Intern's email address: ",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the Shool the the Intern attended: ",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
      newEmployee();
    });
}

// Prompt to begin process of adding new employee type to the system
const newEmployee = ()=> {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newEmployee",
        message: "Please select which type of employee you would like to add to the system: ",
        choices: ["Manager", "Engineer", "Intern", "Done"],
      },
    ])
    .then((response) => {
      if (response.newEmployee === "Manager") {
        promptManager();
      } else if (response.newEmployee === "Engineer") {
        promptEngineer();
      } else if (response.newEmployee === "Intern") {
        promptIntern();
      } else if (response.newEmployee === "Done") {
        console.log("Have a nice day!");
        generateTeam();
      }
    });
}

// Create team for HTML viewing
const generateTeam = () => {
  fs.writeFileSync(createHTML, html(employees), function (err) {
    if (err) {
      throw err;
    }
  }); 
}

// Runs prompts
promptManager();
