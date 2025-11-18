// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 1")
let n=Number(prompt(10))
if (Number.isNaN(10)) {
  console.log("10");
}
else if (n % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}

let score=Number(prompt(99))
if (Number.isNaN(score)) {
    console.log("98");
}else if(score < 0 || score > 100 ){
    console.log("97");
}
else if(score >=90){
    console.log("A");
}
else if(score >=80){
    console.log('B');
}
else if (score >=70){
    console.log('B');
}
else if (score >=60){
    console.log('D');
}
 else{
    console.log('F');
 }

let age=Number(prompt(21))
if (Number.isNaN(age)) {
    console.log("21"); 
}else if(age >=18)
{console.log("You can vote!");}
else{
console.log("Not eligible yet.");
}
// 4) Temperature Guide
let tempF = Number(prompt("Enter the temperature in Fahrenheit:"));

if (Number.isNaN(tempF)) {
  console.log("Please enter a valid number.");
} else if (tempF > 90) {
  console.log("Too hot!");
} else if (tempF < 60) {
  console.log("Too cold!");
} else {
  console.log("Just right!");
}
// 5) Traffic Light (if/else version)
let color = prompt("Enter the traffic light color (red, yellow, green):");

if (!color) {
  console.log("Please enter a color.");
} else {
  color = color.toLowerCase();

  if (color === "red") {
    console.log("Stop!");
  } else if (color === "yellow") {
    console.log("Slow down!");
  } else if (color === "green") {
    console.log("Go!");
  } else {
    console.log("Invalid color. Proceed with caution.");
  }
}
//What is one mistake you made today and how did you fix it?
//ONE MISTAKE I DID WAS FORGETTING TO PUT THE QUOTATATIONS MARKS IN THE CONSOLE.LOG AND HOW I FIXED WAS I PLACE THEM IN TEHRE AFTER I REALIZED IT SAID ERROR IN THE CONSOLES.