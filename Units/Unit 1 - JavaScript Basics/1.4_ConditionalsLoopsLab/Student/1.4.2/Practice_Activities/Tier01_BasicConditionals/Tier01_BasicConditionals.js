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