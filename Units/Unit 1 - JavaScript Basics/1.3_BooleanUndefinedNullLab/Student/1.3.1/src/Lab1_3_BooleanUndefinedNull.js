/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
   let isStudent=true;
   let hasLicense=false;
// - Print results of true || false, true && false, !true
  console.log(true || false);
  console.log(true && false);
  console.log(!true)
// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
 console.log(false && (5>2));
 //this is going to short-circuit evaluate to the reuslt false
// - Print result of true || (2 > 5)
 console.log( true || (2>5));
// //this is going to short-circuit evaluate to the reuslt true
// TODO 3: Undefined
// - Declare variable grade and print it
let grade;
console.log(grade);
//i see undefined beacuse it doesnt have a declared value yet

// TODO 4: Null
// - Create city = null, print it
let city=null;
console.log(city);
// - Reassign city = "Miami" and print again
  city="Miami";
console.log(city);
// TODO 5: Immutability
// - Create word = "hello"
  let word="hello";
// - Try word[0] = "H", print word
word[0]="H";
console.log(word[0]);
//it did not  change because the first letter is "h" and is immutable
// - Reassign word = "Hello" and print again
   word="Hello";
   console.log(word);
// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
