let num1 = 10;
let num2 = 5;
let operator = '+';
let result;

if (operator === '+') {
  result = num1 + num2;
} else if (operator === '-') {
  result = num1 - num2;
} else if (operator === '*') {
  result = num1 * num2;
} else if (operator === '/') {
  result = num1 / num2;
} else {
  console.log("Invalid operator");
}

console.log(result);