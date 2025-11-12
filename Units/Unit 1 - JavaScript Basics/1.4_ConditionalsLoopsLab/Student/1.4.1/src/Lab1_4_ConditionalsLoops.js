/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age= 15;
if(age <=16){
   console.log("Teen dusocunt");
} else if(age >= 65){
    console.log("Senior Discount")
} else{
    console.log("No discount")
}

let weight = 180;
if (weight <= 150) {
  console.log("You're slim");
} else if (weight <= 191) {
  console.log("You are in shape");
} else {
  console.log("You need to start working out");
}


// TODO 2: Nested if with two numbers
let number1 = 10;
let number2 = 20;

if (typeof number1 === "number" && typeof number2 === "number") {
  if (number1 === number2) {
    console.log("Numbers are equal");
  } else if (number1 > number2) {
    console.log("Number 1 is bigger");
  } else {
    console.log("Number 2 is bigger");
  }
} else {
  console.log("Both inputs must be numbers");
}

// TODO 3: Switch statement for language greeting
 let language="French"
 switch(language){
    case "Spanish":
    console.log("Hola, mundo!")
    break;
    case "French":
        console.log("Bonjour tout le monde")
        break;
        default:
            cosnoloe.log("Hello, world");
 }

 let stock="Apple"
 
switch (stock) {
  // Healthcare
  case "UHC":
  case "United Health Care":
    console.log("Healthcare Sector - UnitedHealth Group (UHC)");
    break;
  case "JNJ":
  case "Johnson & Johnson":
    console.log("Healthcare Sector - Johnson & Johnson (JNJ)");
    break;
  case "PFE":
  case "Pfizer":
    console.log("Healthcare Sector - Pfizer (PFE)");
    break;

  // Financial
  case "JPM":
  case "JP MorganChase":
    console.log("Financial Sector - JPMorgan Chase (JPM)");
    break;
  case "BAC":
  case "Bank of America":
    console.log("Financial Sector - Bank of America (BAC)");
    break;
  case "WFC":
  case "Wells Fargo":
    console.log("Financial Sector - Wells Fargo (WFC)");
    break;

  // Technology
  case "AAPL":
  case "Apple":
    console.log("Technology Sector - Apple (AAPL)");
    break;
  case "MSFT":
  case "Microsoft":
    console.log("Technology Sector - Microsoft (MSFT)");
    break;
  case "NVDA":
  case "NVIDIA":
    console.log("Technology Sector - NVIDIA (NVDA)");
    break;

  // Energy
  case "XOM":
  case "ExxonMobil":
    console.log("Energy Sector - ExxonMobil (XOM)");
    break;
  case "CVX":
  case "Chevron":
    console.log("Energy Sector - Chevron (CVX)");
    break;
  case "SHEL":
  case "Shell":
    console.log("Energy Sector - Shell (SHEL)");
    break;

  // Default case (optional)
  default:
    console.log("Unknown company symbol or name.");
    break;
}
// TODO 5: Do..while loop (1 to 5)
let i = 1; // starting point

do {
  console.log(i);
  i++; // increment by 1
} while (i <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("ten");
  } else if (i === 20) {
    console.log("twenty");
  } else {
    console.log(i);
  }
}

// TODO 7: Even/Odd loop (1 to 20)
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
