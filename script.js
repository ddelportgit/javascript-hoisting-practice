// Task 1

console.log(score);

var score = 5;

// Task 2

try {
  console.log(username);
} catch (error) {
  console.log(error);
}

let username = "John";

// Task 3

try {
  console.log(country);
} catch (error) {
  console.log(error);
}

const country = "USA";

// Task 4

// The var declaration is hoisted and initialized with undefined
// The assignment happens when execution reaches "var score = 5".
// In task two it gives a reference error for username because it is still in the tdz
// The same for task 3. It gives a reference error because country is in the temporal dead zone
