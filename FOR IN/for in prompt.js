let person = {
    firstName: "",
    lastName: "",
    age: 0
  };
  
  person.firstName = prompt("Enter your first name:");
  person.lastName = prompt("Enter your last name:");
  person.age = prompt("Enter your age:");
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }