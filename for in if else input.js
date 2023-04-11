const person = {
    firstName: "",
    lastName: "",
    age: 0
  };
  
  for (let prop in person) {
    if (person.hasOwnProperty(prop)) {
      let value = prompt("Enter " + prop);
      person[prop] = value;
    }
  }
  
  console.log(person.firstName + " " + person.lastName + ", " + person.age);
