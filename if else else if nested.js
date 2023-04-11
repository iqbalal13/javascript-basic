let age = 18;
let gender = "female";

if (age >= 18) {
  if (gender === "male") {
    console.log("You are an adult male.");
  } else if (gender === "female") {
    console.log("You are an adult female.");
  } else {
    console.log("Invalid gender input.");
  }
} else {
  console.log("You are not yet an adult.");
}