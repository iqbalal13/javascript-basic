let age = parseInt(document.getElementById("age-input").value);

// Check if age is a number
if (isNaN(age)) {
  alert("Please enter a valid age.");
} else {
  // Check if user is old enough to vote
  if (age < 18) {
    alert("You are not old enough to vote.");
  } else if (age >= 18 && age < 21) {
    alert("You can vote, but cannot drink alcohol.");
  } else {
    alert("You can vote and drink alcohol.");
  }
}