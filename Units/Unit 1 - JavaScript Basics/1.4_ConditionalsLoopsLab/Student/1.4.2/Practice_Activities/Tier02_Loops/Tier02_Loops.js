// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 2");

// 6) Counting to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 7) Countdown Timer
let n = 10;

while (n >= 0) {
  console.log(n);
  n--;
}

console.log("Liftoff!");

// 8) Multiplication Table
let base = Number(prompt("Enter a number for the multiplication table:"));

if (Number.isNaN(base)) {
  console.log("Please enter a valid number.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
}

// 9) Sum Calculator (1..n)
let limit = Number(prompt("Enter a positive integer:"));

if (!Number.isInteger(limit) || limit <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  console.log(`The sum of numbers from 1 to ${limit} is ${sum}.`);
}
