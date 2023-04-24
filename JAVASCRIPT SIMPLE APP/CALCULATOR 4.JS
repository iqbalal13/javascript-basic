let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;

if (operator == '+') {
  result = num1 + num2;
} else if (operator == '-') {
  result = num1 - num2;
} else if (operator == '*') {
  result = num1 * num2;
} else if (operator == '/') {
  result = num1 / num2;
} else {
  console.log("Invalid operator");
}

console.log(result);