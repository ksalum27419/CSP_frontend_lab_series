// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")
const correctUsername = "Kristopher";
const correctPassword = "4206967";

let username = prompt ("Enter Username");
let password = prompt ("Enter Password");

if (username === correctUsername && Password === correctPassword) {
    console.log("Welcome!");
 } else {
        console.log("invalid")
    }

    let weather= prompt("What is the weather today! (sunny/rainy/cold)");
    weather=weather.toLowerCase;

    if(weather === "sunny") {
        console.log("Wear some shorts and a tshirt");
    } else if (weather === "rainy") {
        console.log ( "use a umbrella and wear a raincoat");
    } else if (weather ==="cold") {
        console.log("Wear that quarter zip and and sweatpants" );
    } else {
        console.log ("I don't know what weather type is it today ");
    }

    let balance = 100;
let choice = "";

while (choice !== "exit") {
  choice = prompt("ATM Menu:\n- deposit\n- withdraw\n- balance\n- exit\nEnter choice:").toLowerCase();

  if (choice === "deposit") {
    let amount = Number(prompt("Enter deposit amount:"));
    if (amount > 0) {
      balance += amount;
      console.log(`Deposited $${amount}. New balance: $${balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }

  } else if (choice === "withdraw") {
    let amount = Number(prompt("Enter withdrawal amount:"));
    if (amount > balance) {
      console.log("Insufficient funds! Overdraft not allowed.");
    } else if (amount > 0) {
      balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }

  } else if (choice === "balance") {
    console.log(`Your balance is $${balance}`);

  } else if (choice === "exit") {
    console.log("Goodbye!");

  } else {
    console.log("Invalid option. Try again.");
  }
}

for (let i = 1; i <=10; i++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
 console.log('Roll ${i}: ${die1}, ${die2}');
 if(die1 === die2) {
    console.log(" Doubles!");
 }
}
const questions = [
  "1) What is 2 + 2?",
  "2) What color is the sky?",
  "3) What planet do we live on?"
];

const answers = [
  "4",
  "blue",
  "earth"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]).toLowerCase();

  if (userAnswer === answers[i]) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong!");
  }
}

let percentage = (score / questions.length) * 100;

console.log(`You got ${score} out of ${questions.length} correct.`);
console.log(`Score: ${percentage}%`);
