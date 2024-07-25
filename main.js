#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with",
            choices: ["View all Staff", "View all students", "Exit"]
        });
        //if/else condition
        if (ans.select === "View all Staff") {
            console.log("You are at staff room you can view all staff members...");
        }
        else if (ans.select === "View all students") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the name of the student you want to search for",
            });
            const student = persons.students.find(val => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello! i am ${name.name}, Nice to meet you!`);
                console.log("New student added:");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello! i am ${student.name}, Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select === "Exit") {
            console.log("Exiting...");
            process.exit();
        }
    } while (true);
};
//Start the program 
programStart(persons);
