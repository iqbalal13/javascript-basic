const prompt = require('prompt-sync')();

let person = {
  firstName: "",
  lastName: "",
  age: 0
};

let firstNameInput = prompt("Enter your first name: ");
while (!/^[a-zA-Z]+$/.test(firstNameInput)) {
  console.log("Error: Invalid input. Please enter alphabetic characters only.");
  firstNameInput = prompt("Enter your first name: ");
}
person.firstName = firstNameInput;

let lastNameInput = prompt("Enter your last name: ");
while (!/^[a-zA-Z]+$/.test(lastNameInput)) {
  console.log("Error: Invalid input. Please enter alphabetic characters only.");
  lastNameInput = prompt("Enter your last name: ");
}
person.lastName = lastNameInput;

person.age = prompt("Enter your age:");

for (let key in person) {
  console.log(key + ": " + person[key]);
}