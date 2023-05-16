function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Creating instances of the Person object
var person1 = new Person("Alice", 25);
var person2 = new Person("Bob", 30);

// Accessing object properties
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 30

// Calling object methods
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.